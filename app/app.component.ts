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
          *ngFor="let currentTask of tasks"
          [class]="priorityColor(currentTask)"
          (click)="isDone(currentTask)">
          {{currentTask.description}}
          <button class="btn btn-light" (click)="editTask(currentTask)">Edit!</button>
        </li>
      </ul>
      <hr>
      <div *ngIf="selectedTask">
        <h3>{{selectedTask.description}}</h3>
        <p>Task Complete? {{selectedTask.done}}</p>
        <h3>Edit Task</h3>
        <div class="form-group">
          <label>Enter Task Description:</label>
          <input class="form-control" [(ngModel)]="selectedTask.description">
        </div>
        <label>Enter Task Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)<br><br>
        <button class="btn btn-success" (click)="finishedEditing()">Done</button>
      </div>
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

  selectedTask = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
    this.priorityColor(this.selectedTask);
  }

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

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
