import { Component, OnInit } from '@angular/core';

declare function loadApp(): any;
declare function destruir(): any;

@Component({
  selector: 'unidad2',
  templateUrl: './unidad2.component.html',
  styleUrls: ['./unidad2.component.css']
})
export class Unidad2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadApp();
  }

}
