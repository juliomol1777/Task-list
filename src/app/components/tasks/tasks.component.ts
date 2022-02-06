import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Tasks } from 'src/app/mock-task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = Tasks

  constructor() { }

  ngOnInit(): void {
  }

}
