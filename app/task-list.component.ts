import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul class="list-group">
    <li
      *ngFor="let currentTask of tasks"
      [class]="priorityColor(currentTask)"
      (click)="isDone(currentTask)">
      {{currentTask.description}}
      <button class="btn btn-light" (click)="editTask(currentTask)">Edit!</button>
    </li>
  </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course", 1),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ]

  isDone(clickedTask: Task) {
    // if(clickedTask.done === true) {
    //   alert("This task is done!");
    // } else {
    //   alert("This task is not done. Get back to work!");
    // }
  }

  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return "list-group-item list-group-item-danger";
    } else if (currentTask.priority === 2) {
      return "list-group-item list-group-item-warning";
    } else {
      return "list-group-item list-group-item-info";
    }
  }
}
