import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EventListService } from 'src/app/shared/service/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  private events = [];

  eventDetail = null;
  
  constructor(
    private router: Router, 
    private eventListService: EventListService
  ) { }

  ngOnInit() {
    this.eventListService.getEventList().subscribe((eventList) => {
        this.events = eventList;
    });
  }

  showDetail = (event) => {
    this.router.navigateByUrl(`/event/detail/${event.id}`); 
  }

  btnAddClick = () =>  this.router.navigateByUrl('/event/add');
}
