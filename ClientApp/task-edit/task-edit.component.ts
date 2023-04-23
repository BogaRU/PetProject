import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  @Input() task: Task = {} as Task;

  constructor(private tasksService: TasksService) { }

  onSubmit(): void {
    this.tasksService.updateTask(this.task).subscribe(task => {
      // Обработка успешного обновления задачи
      alert('Задача успешно обновлена!');
    });
  }

  onDelete(): void {
    this.tasksService.deleteTask(this.task.id).subscribe(() => {
      // Обработка успешного удаления задачи
      alert('Задача успешно удалена!');
    });
  }
}
