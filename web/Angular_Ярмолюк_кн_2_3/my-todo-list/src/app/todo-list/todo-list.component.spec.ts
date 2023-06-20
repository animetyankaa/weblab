import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { description: 'Купить продукты', completed: false },
    { description: 'Почистить дом', completed: false },
    { description: 'Забрать детей из школы', completed: false }
  ];
}
