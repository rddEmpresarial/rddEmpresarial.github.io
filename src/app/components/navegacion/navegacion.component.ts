import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  public unidad: number = 1;

  constructor(private _shared: SharedService) { }

  ngOnInit(): void {
  }

  cambiarUnidad(unidad:number): void {
    this._shared.mandarUnidad(unidad);
    this.unidad = unidad;
  }

}
