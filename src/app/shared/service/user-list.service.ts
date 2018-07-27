import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private COLLECTION = 'user';

  constructor(
    private _store: AngularFirestore,
  ) { }

  addUser = (user) => this.editUser(user);

  editUser = (user) => {
    //TODO: Should validate ID
    this._store.collection(this.COLLECTION).doc(user.id).set(user);
  }

  searchUser = (searchStr) => {
    this._store.collection(this.COLLECTION);
  }
  
}
