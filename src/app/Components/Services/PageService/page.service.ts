import { HttpClient } from '@angular/common/http'; // Importiert HttpClient, um HTTP-Anfragen zu machen
import { Injectable } from '@angular/core'; // Importiert Injectable, um die Klasse als Service zu kennzeichnen
import {map, Observable} from 'rxjs'; // Importiert Observable, um reaktive Programmierung zu unterstützen

/**
 * PageService stellt Methoden bereit, um Seiteninhalte von der API zu laden und zu speichern.
 * Der Service wird in der gesamten Anwendung verwendet, da er mit dem Root-Injektor bereitgestellt wird.
 */
@Injectable({
  providedIn: 'root' // Markiert den Service als Singleton auf Anwendungsebene
})
export class PageService {
  private apiUrl = '/app/api'; // Basis-URL für API-Anfragen

  /**
   * Konstruktor der Klasse, injiziert den HttpClient für HTTP-Anfragen.
   * @param http HttpClient für die Kommunikation mit der API
   */
  constructor(private http: HttpClient) {}

  /**
   * Lädt eine Seite basierend auf dem angegebenen Fach.
   * Macht einen GET-Request an die API, um den Inhalt der Seite zu laden.
   * @param fach Das Fach, dessen Seite geladen werden soll
   * @returns Ein Observable, das die Antwort der API als JSON zurückgibt
   */
  loadPage(fach: string): Observable<any> {
    // Sendet eine GET-Anfrage an die API mit dem Fach als Parameter
    return this.http.get<any>(`${this.apiUrl}/getlernsite?titel=${fach}`).pipe(
      // Wir nutzen map, um nur den relevanten 'text' Inhalt aus der Antwort zu extrahieren
      map((response: { text: any; }) => {
        console.log(response); // Zeigt die vollständige API-Antwort in der Konsole an
        return response.text; // Extrahiert das 'text'-Feld aus der API-Antwort
      })
    );
  }


  /**
   * Speichert den Inhalt einer Seite.
   * Sendet einen POST-Request an die API, um die Seite mit dem gegebenen Inhalt zu speichern.
   * @param fach Das Fach, dem der Inhalt zugeordnet wird
   * @param content Der Inhalt der Seite, der gespeichert werden soll
   * @returns Ein Observable, das die Antwort der API als JSON zurückgibt
   */
  savePage(fach: string, content: string): Observable<any> {
    // Erstellt das Payload-Objekt mit dem Fach und dem Seiteninhalt
    const payload = {
      Titel: fach,
      Text: content
    };
    // Sendet eine POST-Anfrage an die API, um den Inhalt zu speichern; mitCredentials sorgt dafür, dass Cookies gesendet werden
    return this.http.post<any>(`${this.apiUrl}/save/lerning/site`, payload, { withCredentials: true });
  }
}
