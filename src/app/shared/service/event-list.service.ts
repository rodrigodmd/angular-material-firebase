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

  private COLLECTION = 'events';

  private _events = new Observable<Event[]>((obs) => {
    this._store.collection(this.COLLECTION)
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

  //getEvent = (id) => this._store.collection(this.COLLECTION, ref => ref.where('id', '==', id)).valueChanges();
  getEvent = (id) => this._store.collection(this.COLLECTION).doc(id).valueChanges();
  
  editEvent = (event) => {
    if (!event.id) { 
      event.id = this._store.createId();
      
    }
    this._store.collection(this.COLLECTION).doc(event.id).set(event);
  }

  
}
