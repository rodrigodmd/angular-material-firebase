import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

export interface Event {
  id?: string
  name: string,
  token?:string, 
  description?: string,
  price?: number,
  place?: ''
}

@Component({
  selector: 'app-event-list-edit',
  templateUrl: './event-list-edit.component.html',
  styleUrls: ['./event-list-edit.component.scss']
})


export class EventListEditComponent implements OnInit {
  event: Event = { name: '', description:'' }
  constructor(
    private _store: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
  }

  editEvent = (form: NgForm) => {
    console.log("Adding event:");
    console.log(this.event);
    if (!this.event.id) { 
      this.event.id = this._store.createId();
    }
    this._store.collection('events').add(this.event);
    this.router.navigateByUrl('/event')
  }

}
