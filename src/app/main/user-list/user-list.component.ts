import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  peopleToMarked = 0;
  users = [
    { name: 'Nico' },
    { name: 'Javi' },
    { name: 'Juan' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addOneToMarked = (va) => {
    va ? this.peopleToMarked++ : this.peopleToMarked--;
  }
}
