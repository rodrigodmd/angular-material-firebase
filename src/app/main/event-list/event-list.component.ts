import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events = [
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
  ];

  eventDetail = null;
  constructor() { }

  ngOnInit() {
  }

  showDetail = (event) => this.eventDetail = event;

}
