import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
    //desde el servicio viene, subscribe funciona asincrono
    this.TaskService.getTask().subscribe(tasks => this.tasks = tasks)
  }

  //la funcion onDeleteTask que viene del componente hijo task-item
  //ejecuta esta funcion
  deleteTask(task:Task){
    //borramos la tarea de la base de datos
    //la funcion deleteTask esta en el task.service
    this.TaskService.deleteTask(task)
    //luego del borrado volvemos a recargar las tareas que sean diferentes
    //a la tarea con id borrada
    .subscribe(()=> this.tasks = this.tasks
    .filter(t => t.id !== task.id))
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.TaskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task){
    this.TaskService.addTask(task).subscribe(task =>{
      this.tasks.push(task)
    })
  }

}
