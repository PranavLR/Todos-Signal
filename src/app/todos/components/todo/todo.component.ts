import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges {
  
  todoService = inject(TodosService);
  editingText: string = '';
  
  @Input({required: true}) todo!: TodoInterface;
  @Input({required: true}) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef; 
  
  ngOnInit(): void {
    this.editingText = this.todo.text;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      },0)
    }
  }

  changeText(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    if(value === '')this.editingText = this.todo.text
    this.editingText = value;
  }

  changeTodo() {
    if(this.editingText === '')this.editingText = this.todo.text
    this.todoService.changeTodo(this.todo.id , this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoInEditMode() {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id)
  }

  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id);
  }
}
