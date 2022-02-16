import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from 'src/app/Task';
import { Tasks } from 'src/app/mock-task';

const httpOptions = {
  headers: new HttpHeaders({
  'content-type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //endpoint de json-server archivo db.json
  private apiUrl = 'http://localhost:5001/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTask() : Observable <Task[]>
  {
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task:Task): Observable<Task>{
    const url = '$(this.apiUrl)/$(task.id)'
    return this.http.delete<Task>(url)
  }

  onDeleteTaskReminder(task:Task): Observable<Task>{
    const url = '$(this.apiUrl)/$(task.id)'
    return this.http.put<Task>(url, task, httpOptions)

  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url = '$(this.apiUrl)/$(task.id)'
    return this.http.put<Task>(url, task)
  }
  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
