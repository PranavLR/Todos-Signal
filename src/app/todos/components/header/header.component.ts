import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  text: string = '';
  todosService = inject(TodosService)

  changeText(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }
  addTodo(): void {
    this.todosService.addTodo(this.text);
    this.text = '';
  }


  changeThemeColor(){
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('light-theme')){
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
    return true
  } 

}
