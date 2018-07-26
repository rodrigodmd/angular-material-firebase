import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  eventId:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(data => {
      this.eventId = data.id;
    }); 
  }

  addOneToMarked = (va) => {
    va ? this.peopleToMarked++ : this.peopleToMarked--;
  }

  btnAddClick = () =>  this.router.navigateByUrl(`/event/${this.eventId}/user/add`);
}
