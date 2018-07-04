import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute, Router } from '@angular/router';

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
    private _store: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this._store.collection('events', ref => ref.where('id', '==', data.id))
        .valueChanges()
        .subscribe(events => {
          this.event = events[0];
        });
    }); 
  }

  goBack = () => this.router.navigateByUrl('/event');

}
