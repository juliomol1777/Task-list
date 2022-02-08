import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'
import { Task } from 'src/app/Task';
import { Tasks } from 'src/app/mock-task';


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
}
