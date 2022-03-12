import { Component, OnInit } from '@angular/core';
import { funcion } from '../../../assets/js/main';

@Component({
  selector: 'cuaderno',
  templateUrl: './cuaderno.component.html',
  styleUrls: ['./cuaderno.component.css']
})
export class CuadernoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    funcion
  }

}
