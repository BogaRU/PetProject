import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'api/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(task: Partial<Task>) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  getTask(id: number) {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  updateTask(task: Task) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
