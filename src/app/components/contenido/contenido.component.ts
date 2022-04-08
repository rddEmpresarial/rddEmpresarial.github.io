import { Component, OnInit} from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public unidad:number = 1;

  constructor(private _shared:SharedService) {
  }

  ngOnInit(): void {
    this._shared.message$
      .subscribe(
        message => {
          this.unidad = message;
        }
      );
  }

}
