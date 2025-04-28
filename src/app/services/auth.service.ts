import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { iUser } from '../interfaces/iUser';
import { collection, doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);

  firestore = inject(Firestore);
  profile = collection(this.firestore, 'profile');

  currentUser = signal<iUser | null | undefined>(undefined);
  newUser = signal<boolean>(false);

  docRef = doc(this.firestore, 'profile/' + this.currentUser()?.uid);

  isLoggedIn() {
    if (this.currentUser()?.uid) {
      this.docRef = doc(this.firestore, 'profile/' + this.currentUser()?.uid);
      console.log('profile/' + this.currentUser()?.uid);
    }
    return this.currentUser() !== null && this.currentUser() !== undefined;
  }

  getProfile(): Observable<void> {
    const profile = getDoc(this.docRef)
      .then((d) => this.newUser.set(!d.exists()))
      .then();
    return from(profile);
    // console.log(docRef)
  }

  updateProfile(title: string, value: string | string[]): Observable<void> {
    console.log('profile/' + this.currentUser()?.uid);
    const newDoc = getDoc(this.docRef)
      .then((d) => d.exists())
      .then((exists) => {
        if (exists) {
          return updateDoc(this.docRef, { [title]: value });
        } else {
          return setDoc(this.docRef, { [title]: value });
        }
      });
    return from(newDoc);
  }

  register(email: string, name: string, password: string): Observable<void> {
    const new_account = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => {
      updateProfile(res.user, { displayName: name });
    });
    return from(new_account);
  }

  login(email: string, password: string): Observable<void> {
    const new_account = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => {});
    return from(new_account);
  }

  logout(): Observable<void> {
    const _user = signOut(this.firebaseAuth);
    return from(_user);
  }
}
