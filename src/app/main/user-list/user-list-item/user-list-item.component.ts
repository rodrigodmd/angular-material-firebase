import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user;
  marked = false;
  @Output() plusOne = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }


  mark = () => {
    this.plusOne.emit(this.marked);
  }

}
