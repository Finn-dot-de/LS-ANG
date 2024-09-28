import { Injectable } from '@angular/core'; // Importiert Injectable, um die Klasse als Service zu markieren
import { HttpClient } from '@angular/common/http'; // Importiert HttpClient, um HTTP-Anfragen an die API zu senden
import { Observable, throwError } from 'rxjs'; // Importiert Observable und throwError für reaktive Programmierung und Fehlerbehandlung
import { catchError } from 'rxjs/operators'; // Importiert catchError, um Fehler im Observable zu behandeln

/**
 * Schnittstelle zur Definition der Struktur eines Benutzerobjekts.
 * Dies erleichtert die Typensicherheit und die Arbeit mit Benutzerdaten im Service.
 */
export interface User {
  Id: number;           // Die eindeutige ID des Benutzers
  Vorname: string;      // Der Vorname des Benutzers
  Nachname: string;     // Der Nachname des Benutzers
  Rolle: string;        // Die Rolle des Benutzers
  Userkuerzel: string;
}

/**
 * Der UserService stellt Methoden bereit, um Benutzerdaten von der API zu verwalten.
 * Der Service wird global bereitgestellt und bietet eine zentrale Stelle zur Benutzerverwaltung.
 */
@Injectable({
  providedIn: 'root', // Stellt den Service global im Root-Injektor der Anwendung bereit
})
export class UserService {
  private readonly apiUrl = '/app/api/get/user'; // Basis-URL des Endpunkts für Benutzerabfragen

  /**
   * Konstruktor der Klasse, injiziert den HttpClient für die Kommunikation mit der API.
   * @param http HttpClient für das Senden von HTTP-Anfragen
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * Ruft die aktuellen Benutzerdaten vom Server ab.
   * Sendet eine GET-Anfrage an den definierten API-Endpunkt.
   * @returns Ein Observable, das die Benutzerdaten als User-Objekt zurückgibt
   */
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl).pipe(
      catchError(this.handleError) // Behandelt Fehler im HTTP-Request
    );
  }

  /**
   * Behandelt HTTP-Fehler, indem eine Fehlernachricht protokolliert und ein Fehlerobjekt zurückgegeben wird.
   * @param error Der Fehler, der vom HTTP-Request generiert wurde
   * @returns Ein Observable, das den Fehler für die Weiterverarbeitung bereitstellt
   */
  private handleError(error: any): Observable<never> {
    console.error('Fehler beim Abrufen der Benutzerdaten:', error); // Protokolliert den Fehler in der Konsole
    return throwError(() => new Error('Es gab ein Problem beim Abrufen der Benutzerdaten.')); // Gibt eine neue Fehlermeldung zurück
  }
}
