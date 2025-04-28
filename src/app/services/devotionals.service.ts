import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevotionalsService {

  http = inject(HttpClient)
  private url = '/bible/'
  constructor() { }

  getDevotionals(verse: string): Observable<any> {
    return this.http.get<any>(this.url+verse);
  }
}
