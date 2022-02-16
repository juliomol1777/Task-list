import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = Tasks[0]
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  //al hacer click en la cruz de borrar se ejecuta onDelete
  onDelete(task: Task){
    //la exporto al componente padre task.component, por eso lo uso en Output
    this.onDeleteTask.emit(task)
  }

  //al hacer click en el task.item.component.html(seleccionar una terea se pinta de color y el reminder cambia entre false y true)
  //y se ejecuta onToggle
  onToggle(task: Task){
    //lo exporto
    this.onToggleReminder.emit(task)
  }
}
