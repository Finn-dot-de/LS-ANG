import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private apiUrl = '/app/api';

  constructor(private http: HttpClient) {}

  // API-Aufruf zum Laden einer Seite basierend auf dem Fach
  loadPage(fach: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getfile?id=${fach}`);
  }

  // API-Aufruf zum Speichern einer Seite
  savePage(fach: string, content: string): Observable<any> {
    const payload = { id: fach, content: content };
    return this.http.post<any>(`${this.apiUrl}/save/lerning/site`, payload, { withCredentials: true });
  }
}
