import { Injectable } from '@angular/core'; // Importiert Injectable, um die Klasse als Service zu kennzeichnen
import { HttpClient } from '@angular/common/http'; // Importiert HttpClient, um HTTP-Anfragen zu machen
import { Observable } from 'rxjs'; // Importiert Observable, um die Daten als reaktive Streams zu verarbeiten
import { Fach } from './fach.model';  // Importiert das Fach-Interface, das die Struktur eines Fachs definiert

/**
 * FachService stellt Methoden bereit, um Fächer von der API zu laden.
 * Der Service ist auf Anwendungsebene als Singleton bereitgestellt.
 */
@Injectable({
  providedIn: 'root' // Stellt den Service auf Anwendungsebene zur Verfügung
})
export class FachService {
  private apiUrl = '/app/api/faecher';  // Basis-URL für API-Anfragen, die sich auf Fächer beziehen

  /**
   * Konstruktor der Klasse, injiziert den HttpClient für die Kommunikation mit der API.
   * @param http HttpClient für HTTP-Anfragen
   */
  constructor(private http: HttpClient) { }

  /**
   * Ruft die Liste der Fächer von der API ab.
   * Macht einen GET-Request an die API und gibt die Fächer als Observable zurück.
   * @returns Ein Observable, das ein Array von Fach-Objekten zurückgibt
   */
  getFaecher(): Observable<Fach[]> {
    // Sendet eine GET-Anfrage an die API, um die Liste der Fächer abzurufen
    return this.http.get<Fach[]>(this.apiUrl);
  }
}
