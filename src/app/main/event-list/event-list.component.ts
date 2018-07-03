import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events = [ ];
  /*
    {  
      name: 'Asado mundial',
      token:'adadasasd', 
      description: 'Le vamos a ganar a Francia',
      price: '100',
      place: ''
    },
    { 
      name: 'Cumple Fran',
      token:'adadasasd', 
      description: 'Puto el que lee',
      price: '100',
      place: '' 
    },
    { 
      name: 'Asado domingo',
      token:'adadasasd', 
      description: '',
      price: '100',
      place: ''
    },
  ];*/

  eventDetail = null;
  
  constructor(private _store: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this._store.collection('events')
      .valueChanges()
      .subscribe(events => this.events = events);
  }

  showDetail = (event) => this.eventDetail = event;

  btnAddClick = () =>  this.router.navigateByUrl('/event/add');
}
