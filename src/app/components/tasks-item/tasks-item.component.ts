import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = Tasks[0]

  constructor() { }

  ngOnInit(): void {
  }

}
