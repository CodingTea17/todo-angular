import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <div class="row">
      <ul class="list-group">
        <li
        [class]="priorityColor(currentTask)"
        (click)="isDone(currentTask)"
        *ngFor="let currentTask of tasks">{{currentTask.description}}   <button (click)="editTask()">Edit!</button></li>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime: Date = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course", 1),
    new Task('Begin brainstorming possible JavaScript group projects', 3),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ]

  editTask(){
    alert("Oh snap! I'm an alert!");
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Get back to work!");
    }
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

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
