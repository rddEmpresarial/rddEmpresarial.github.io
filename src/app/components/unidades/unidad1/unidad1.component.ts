import { Component, OnInit } from '@angular/core';

declare function loadApp(): any;
declare function destruir(): any;

@Component({
  selector: 'unidad1',
  templateUrl: './unidad1.component.html',
  styleUrls: ['./unidad1.component.css']
})
export class Unidad1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('aux') != null) {
      loadApp();
    } else {
      sessionStorage.setItem('aux', "1");
    }
  }

}
