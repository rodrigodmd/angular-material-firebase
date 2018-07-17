import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EventListService } from 'src/app/shared/service/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  private events:Event[] = [];

  eventDetail = null;
  
  constructor(
    private router: Router, 
    private eventListService: EventListService
  ) { }

  ngOnInit() {
    this.eventListService.getEventList().subscribe((eventList) => {
        this.events = eventList;
        console.log(eventList);
    });
  }

  showDetail = (event) => {
    console.log(event);
    this.router.navigateByUrl(`/event/detail/${event.id}`); //this.eventDetail = event;
  }

  btnAddClick = () =>  this.router.navigateByUrl('/event/add');
}
