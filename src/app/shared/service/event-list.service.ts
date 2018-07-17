import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';

export interface Event {
  id?: string
  name: string,
  token?:string, 
  description?: string,
  price?: number,
  place?: ''
}


@Injectable({
  providedIn: 'root'
})
export class EventListService {

  private _events = [];

  constructor(private _store: AngularFirestore) { 
    this._store.collection('events')
      .valueChanges()
      .subscribe(events => this._events = events);
  }

  getEventList = () => of(this._events);
  

  
}
