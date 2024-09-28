import { Component, OnInit } from '@angular/core'; // Importiert die benötigten Dekoratoren und das OnInit-Interface von Angular
import { DropdownComponent } from '../dropdown/dropdown.component'; // Importiert die Dropdown-Komponente zur Verwendung im Template
import { FachService } from 'src/app/Components/Services/FächerService/fach.service'; // Importiert den FachService zum Abrufen der Fächer
import { Fach } from 'src/app/Components/Services/FächerService/fach.model'; // Importiert das Fach-Interface, das die Struktur eines Fachs definiert
import { catchError } from 'rxjs/operators'; // Importiert catchError für die Fehlerbehandlung in Observables
import { of } from 'rxjs'; // Importiert of, um ein leeres Observable zu erstellen, falls ein Fehler auftritt
import { HttpClient } from "@angular/common/http"; // Importiert HttpClient, um HTTP-Anfragen zu machen
import { NgOptimizedImage } from "@angular/common"; // Importiert NgOptimizedImage für optimierte Bilddarstellung

/**
 * Die HeaderComponent stellt den Header-Bereich der Anwendung dar.
 * Sie lädt dynamische Links und Optionen für Dropdown-Menüs, die auf Benutzerinteraktionen reagieren.
 */
@Component({
  selector: 'app-header', // Der CSS-Selektor, um die Komponente in einer Vorlage zu verwenden
  standalone: true, // Gibt an, dass die Komponente eigenständig ist und keine Modulabhängigkeiten erfordert
  templateUrl: './header.component.html', // Der Pfad zur HTML-Vorlage der Komponente
  styleUrls: ['./header.component.scss'], // Der Pfad zur CSS-Datei der Komponente
  imports: [DropdownComponent, NgOptimizedImage], // Importiert andere Komponenten und Optimierungen, die in dieser Komponente genutzt werden
})
export class HeaderComponent implements OnInit {
  logoutLink: string = ''; // Speichert den Link zum Logout, der von der API geladen wird
  options1: { name: string, link: string }[] = []; // Speichert die Optionen für das erste Dropdown-Menü, die dynamisch geladen werden
  options2 = [
    // { name: 'Schnellübung', link: '/schnelluebung' }, // Auskommentierte Optionen, die eventuell später genutzt werden können
    { name: 'Normale Übung', link: '/normaluebungen' },
    // { name: 'Intensiveübungen', link: '/intensiveuebungen' },
    // { name: 'Mischübungen', link: '/mischuebungen' },
  ];

  options3 = [
    { name: 'Langzeit', link: '/langzeit' },
    { name: 'Noch zu Üben', link: '/nochzueben' },
    { name: 'Eigene Übungen erstellen', link: '/eigeneuebungen' },
  ];

  selectedValue1 = 'Fächer'; // Platzhaltertext für das erste Dropdown-Menü
  selectedValue2 = 'Übungen'; // Platzhaltertext für das zweite Dropdown-Menü
  selectedValue3 = 'Lernfortschritt'; // Platzhaltertext für das dritte Dropdown-Menü

  /**
   * Konstruktor der HeaderComponent, der die benötigten Services injiziert.
   * @param fachService Der Service, der für das Laden der Fächer verantwortlich ist
   * @param http HttpClient für die HTTP-Kommunikation
   */
  constructor(private fachService: FachService, private http: HttpClient) { }

  /**
   * Lifecycle-Hook, der nach der Initialisierung der Komponente aufgerufen wird.
   * Lädt die Fächer und den Logout-Link beim Start der Komponente.
   */
  ngOnInit() {
    this.loadFaecher(); // Lädt die Fächer für das erste Dropdown-Menü
    // Abrufen des Logout-Links von der API
    this.http.get<{ url: string }>('/logout/link')
      .subscribe({
        next: (response) => {
          this.logoutLink = response.url; // Weist den abgerufenen URL-Wert der logoutLink-Variable zu
        },
        error: (error) => {
          console.error('Fehler beim Abrufen des Links:', error);
          this.logoutLink = '#'; // Fallback-URL, falls der API-Aufruf fehlschlägt
        }
      });
  }

  /**
   * Lädt die Liste der Fächer und füllt die Optionen für das Dropdown-Menü.
   * Fehler werden abgefangen und führen zur Rückgabe einer leeren Liste.
   */
  loadFaecher() {
    this.fachService.getFaecher().pipe(
      catchError(error => {
        console.error('Fehler beim Laden der Fächer:', error);
        return of([]); // Gibt eine leere Liste zurück, um Fehler zu handhaben
      })
    ).subscribe({
      next: (data: Fach[]) => {
        // Mappt die abgerufenen Fächer auf die Dropdown-Optionen
        this.options1 = data.map(item => ({
          name: item.fach, // Setzt den Namen des Fachs
          link: `/${item.fach.replace(/ /g, '').toLowerCase()}` // Erstellt den Link aus dem Fachnamen, ersetzt Leerzeichen und macht Kleinbuchstaben
        }));
      },
      error: (error) => {
        console.error('Fehler beim Laden der Fächer:', error); // Gibt einen Fehler in der Konsole aus, falls das Mapping fehlschlägt
      }
    });
  }
}
