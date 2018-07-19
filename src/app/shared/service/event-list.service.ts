import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of, from } from 'rxjs';

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

  private _events = new Observable<Event[]>((obs) => {
    this._store.collection('events')
        .valueChanges()
        .subscribe(events => {
          obs.next(events as Event[]);
        });

  });

  constructor(
    private _store: AngularFirestore
  ) { 
    
    }

  getEventList = ():Observable<Event[]> => this._events;
  

  
}
