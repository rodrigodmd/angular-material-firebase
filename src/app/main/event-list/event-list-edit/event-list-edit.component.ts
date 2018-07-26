import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventListService } from 'src/app/shared/service/event-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-list-edit',
  templateUrl: './event-list-edit.component.html',
  styleUrls: ['./event-list-edit.component.scss']
})


export class EventListEditComponent implements OnInit {
  event: any = { name: '', description:'' }
  constructor(
    private eventListService: EventListService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.eventListService.getEvent(data.id)
        .subscribe(event => {
          this.event = event;
        })
    });  
  }

  editEvent = (form: NgForm) => {
    this.eventListService.editEvent(this.event);
    this.router.navigateByUrl('/event')
  }

  goBack = () => this.router.navigateByUrl('/event');

}
