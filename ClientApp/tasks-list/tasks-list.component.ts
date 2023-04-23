import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksService: TasksService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
