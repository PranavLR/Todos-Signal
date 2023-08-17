import { Injectable, PLATFORM_ID, WritableSignal, effect, inject, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  platformId: Object = inject(PLATFORM_ID)
  
  todosSig: WritableSignal<TodoInterface[]> = signal<TodoInterface[]>([]);
  filterSig: WritableSignal<FilterEnum> = signal<FilterEnum>(FilterEnum.all);
  localStorage!: Storage
  isBrowser: boolean = isPlatformBrowser(this.platformId);
  
  logTodos = effect(() => {
    if (this.isBrowser) {
      localStorage.setItem('Todos', JSON.stringify(this.todosSig()));
    }
  })
  
  constructor() {
    if (this.isBrowser) { 
      const todosFromStorage = this.getTodosFromStroage();
      this.todosSig.set(todosFromStorage);
    }
  }

  getTodosFromStroage(): Array<TodoInterface> {
    if (this.isBrowser){
      const todosString = localStorage.getItem('Todos')
      return todosString ? JSON.parse(todosString) : []
    }
    return []
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  addTodo(text: string): void {
    if(text === '')return
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    }
    this.todosSig.update(todos => [...todos, newTodo]);
  }
  
  changeTodo(id: string, text: string): void {
    this.todosSig.update(todos => {
      return todos.map((todo)=> todo.id === id ? {...todo, text} : todo)
    })
  }

  removeTodo(id: string): void {
    this.todosSig.update(todos => {
      return todos.filter(todo => todo.id !== id);
    })
  }

  removeAllTodos() {
    this.todosSig.set([])
  }

  toggleTodo(id: string): void {
    this.todosSig.update(todos => {
      return todos.map((todo)=> todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
    })
  }

  toggleAll(isCompleted: boolean): void {
    this.todosSig.update(todos => {
      return todos.map((todo)=> ({...todo, isCompleted: isCompleted}))
    })
  }

}
