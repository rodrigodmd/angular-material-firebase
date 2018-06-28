import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-list-detail',
  templateUrl: './event-list-detail.component.html',
  styleUrls: ['./event-list-detail.component.scss']
})
export class EventListDetailComponent implements OnInit {
  @Input() event;
  constructor() { }

  ngOnInit() {
  }

}
