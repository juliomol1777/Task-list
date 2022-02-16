import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string ="Task List";
  showAddTask : boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle()
              .subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    //console.log("toggleAddTask")
    this.uiService.toggleAddTask();
  }

  //funcion para ocultar un boton, si estoy en la misma direccion url del 
  //componente oculta el boton
  hasRoute(route: string){
    return this.router.url === route
  }
}
