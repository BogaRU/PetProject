import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  taskForm = this.fb.group({
    id: [0],
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    dueDate: ['', [Validators.required]],
    status: ['', [Validators.required]]
  });

  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService
  ) { }

  onSubmit(): void {
    this.tasksService.createTask(this.taskForm.value).subscribe(task => {
      // Обработка успешного создания задачи
      this.taskForm.reset();
      this.successMessage = 'Задача успешно создана!';
    }, error => {
      // Обработка ошибки при создании задачи
      this.successMessage = '';
    });
  }
}
