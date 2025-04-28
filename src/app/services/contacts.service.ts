import { inject, Injectable } from '@angular/core';
import { collectionData, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';
import { iContact } from '../interfaces/iContact';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  auth = inject(AuthService);
  firestore = inject(Firestore);

  contactsCollection = collection(this.firestore, this.auth.currentUser()?.uid! + '_contacts');

  getContacts(): Observable<iContact[]> {
    return collectionData(this.contactsCollection, {idField: 'id'}) as Observable<iContact[]>;
    // console.log(docRef)
  }

  addContact(contact_item: iContact): Observable<string> {
    const promise = addDoc(this.contactsCollection, contact_item).then(
      (response => response.id)
    )
    return from(promise)
  }

  updateContact(contact_item: iContact): Observable<void> {
    const promise = updateDoc(doc(this.firestore, this.auth.currentUser()?.uid! + '_contacts/'+contact_item.id), {...contact_item})
    return from(promise)
  }
}
