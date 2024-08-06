import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fach } from './fach.model';  // Importieren Sie die Schnittstelle

@Injectable({
  providedIn: 'root'
})
export class FachService {
  private apiUrl = '/api/feacher';

  constructor(private http: HttpClient) { }

  getFeacher(): Observable<Fach[]> {
    return this.http.get<Fach[]>(this.apiUrl);
  }
}
