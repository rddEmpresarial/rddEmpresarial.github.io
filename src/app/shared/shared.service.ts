import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _messageSource = new Subject<number>();
  message$ = this._messageSource.asObservable();

  constructor() { }

  mandarUnidad(unidad: number) {
    this._messageSource.next(unidad);
  }

}
