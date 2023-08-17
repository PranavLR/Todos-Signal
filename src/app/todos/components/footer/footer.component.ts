import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todosService.todosSig().filter(todo => !todo.isCompleted).length
  })
  noTodosClass = computed(() => {
    return this.todosService.todosSig().length == 0
  })
  itemLeftText = computed(() => {
    return `Item${this.activeCount() !== 1 ? 's' : ''} Left`
  })

  
  changeFilter(event: MouseEvent, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }

  removeAllTodos(event: MouseEvent,) {
    event.preventDefault();
    this.todosService.removeAllTodos();
  }

}
