import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserListService } from 'src/app/shared/service/user-list.service';

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

  userSearch:string = "";
  userOptions;

  eventId:string;

  constructor(
    private userListService: UserListService,
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

  searchUser = () => {
    this.userListService.searchUser(this.userSearch).subscribe((userList) => {
      this.userOptions = userList;
    });
    // this.userOptions = this.userListService.searchUser(this.userSearch);
  }

  selectUser = () => {
    console.log("SELECTED: " + this.userSearch);
    
    // this.router.navigateByUrl('/event')
  }
  
  btnAddClick = () =>  this.router.navigateByUrl(`/event/${this.eventId}/user/add`);
}
