import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-list-edit',
  templateUrl: './user-list-edit.component.html',
  styleUrls: ['./user-list-edit.component.scss']
})
export class UserListEditComponent implements OnInit {

  invite = {
    user: {
      name: "",
      mail: "",
    },
    accepted: false
  };

  userSearch: string;
  eventId: string;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(data => {
      this.eventId = data.id;
      // this.eventListService.getEvent(data.id)
      //   .subscribe(event => {
      //     this.event = event;
      //   })
    });  
  }

  searchUser = () => {
    // this.eventListService.editEvent(this.event);
    // this.router.navigateByUrl('/event')
  }

  saveInvite = (form: NgForm) => {
    // this.eventListService.editEvent(this.event);
    // this.router.navigateByUrl('/event')
  }

  goBack = () => this.router.navigateByUrl(`/event/${this.eventId}/user`);

}
