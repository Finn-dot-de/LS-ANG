import { HttpClient } from '@angular/common/http'; // Importiert HttpClient, um HTTP-Anfragen an die API zu senden
import { Injectable } from '@angular/core'; // Importiert Injectable, um die Klasse als Service zu markieren
import { Observable } from 'rxjs'; // Importiert Observable, um reaktive Programmierung zu unterstützen

/**
 * Definiert die Schnittstelle für die User-Datenstruktur.
 * Diese Struktur repräsentiert die Informationen eines Benutzers, die vom AuthService zurückgegeben werden.
 */
export interface User {
  user_id: string; // Die eindeutige Benutzer-ID
  email: string; // Die E-Mail-Adresse des Benutzers
}

/**
 * AuthService stellt Authentifizierungsfunktionen bereit, insbesondere zum Abrufen der Benutzerdaten.
 * Der Service ist auf Anwendungsebene als Singleton bereitgestellt und wird durch den Root-Injektor zur Verfügung gestellt.
 */
@Injectable({
  providedIn: 'root', // Stellt den Service global auf Anwendungsebene bereit
})
export class AuthService {
  /**
   * Konstruktor der Klasse, injiziert den HttpClient für die Kommunikation mit der API.
   * @param http HttpClient für das Senden von HTTP-Anfragen an die API
   */
  constructor(private http: HttpClient) {}

  /**
   * Ruft die aktuellen Benutzerdaten von der API ab.
   * Macht einen GET-Request an die definierte API-Route, um die User-Daten als Observable zu erhalten.
   * @returns Ein Observable, das ein User-Objekt mit den Benutzerdaten zurückgibt
   */
  getUser(): Observable<User> {
    // Sendet eine GET-Anfrage an die API, um die Benutzerdaten abzurufen
    return this.http.get<User>('/app/api/user/');
  }
}
