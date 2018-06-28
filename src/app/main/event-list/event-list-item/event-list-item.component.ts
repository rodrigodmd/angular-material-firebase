import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  @Input() event;
  @Output() gotoEvent = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }

  click = () => this.gotoEvent.emit(this.event);
  
}
