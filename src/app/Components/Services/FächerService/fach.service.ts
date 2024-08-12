// fach.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fach } from './fach.model';  // Import der Schnittstelle

@Injectable({
  providedIn: 'root'
})
export class FachService {
  private apiUrl = '/api/faecher';  // API-URL anpassen

  constructor(private http: HttpClient) { }

  getFaecher(): Observable<Fach[]> {
    return this.http.get<Fach[]>(this.apiUrl);
  }
}
