import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Invite {
  id?: string
  user: {
    id?: string,
    name: string,
    mail: string,
  },
  eventId: string, 
  accepted?: boolean,
  paid: number,
}

@Injectable({
  providedIn: 'root'
})
export class InviteListService {
  private COLLECTION = 'invites';

  private _invites = new Observable<Invite[]>((obs) => {
    this._store.collection(this.COLLECTION)
        .valueChanges()
        .subscribe(invites => {
          obs.next(invites as Invite[]);
        });
  });

  constructor(
    private _store: AngularFirestore
  ) { }
  
  getInviteList = ():Observable<Invite[]> => this._invites;

  getInvite = (id) => this._store.collection(this.COLLECTION).doc(id).valueChanges();

  getInviteByUser = (mail) => this._store.collection(this.COLLECTION, ref => ref.where('user.mail', '==', mail)).valueChanges();
  
  getInviteByEvent = (eventId) => this._store.collection(this.COLLECTION, ref => ref.where('eventId', '==', eventId)).valueChanges();
  
  editInvite = (invite) => {
    if (!invite.id) { 
      invite.id = this._store.createId(); 
    }
    this._store.collection(this.COLLECTION).doc(invite.id).set(invite);
  }
}
