import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  /* vienen del selector app button en header.component.htm */
  @Input() text: string = ""
  @Input() color: string = ""
  /* aca envio hacia afuera (emito hacia header) el click en el boton */
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit()
  }

}
