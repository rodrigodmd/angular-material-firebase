import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventListService } from 'src/app/shared/service/event-list.service';

@Component({
  selector: 'app-event-list-detail',
  templateUrl: './event-list-detail.component.html',
  styleUrls: ['./event-list-detail.component.scss']
})
export class EventListDetailComponent implements OnInit {
  @Input() event: any = {
    name: "",
    description: "",
    price: 0,
    place: ""
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventListService: EventListService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(data => {
      this.eventListService.getEvent(data.id)
        .subscribe(events => {
          this.event = events[0];
        })
    });  
  }

  goBack = () => this.router.navigateByUrl('/event');

}
