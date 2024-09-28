import { Component, OnInit } from '@angular/core'; // Importiert die benötigten Dekoratoren und das OnInit-Interface von Angular
import { DropdownComponent } from '../dropdown/dropdown.component'; // Importiert die Dropdown-Komponente zur Verwendung im Template
import { FachService } from 'src/app/Components/Services/FächerService/fach.service'; // Importiert den FachService zum Abrufen der Fächer
import { Fach } from 'src/app/Components/Services/FächerService/fach.model'; // Importiert das Fach-Interface, das die Struktur eines Fachs definiert
import { UserService } from 'src/app/Components/Services/UserService/user.service'; // Importiert den UserService zum Abrufen des Benutzernamens
import { catchError } from 'rxjs/operators'; // Importiert catchError für die Fehlerbehandlung in Observables
import { of } from 'rxjs'; // Importiert of, um ein leeres Observable zu erstellen, falls ein Fehler auftritt
import { HttpClient } from "@angular/common/http"; // Importiert HttpClient, um HTTP-Anfragen zu machen
import { NgOptimizedImage } from "@angular/common"; // Importiert NgOptimizedImage für optimierte Bilddarstellung

@Component({
  selector: 'app-header', // Der CSS-Selektor, um die Komponente in einer Vorlage zu verwenden
  standalone: true, // Gibt an, dass die Komponente eigenständig ist und keine Modulabhängigkeiten erfordert
  templateUrl: './header.component.html', // Der Pfad zur HTML-Vorlage der Komponente
  styleUrls: ['./header.component.scss'], // Der Pfad zur CSS-Datei der Komponente
  imports: [DropdownComponent, NgOptimizedImage], // Importiert andere Komponenten und Optimierungen, die in dieser Komponente genutzt werden
})
export class HeaderComponent implements OnInit {
  logoutLink: string = ''; // Speichert den Link zum Logout, der von der API geladen wird
  username: string = ''; // Speichert den Namen des aktuellen Benutzers
  options1: { name: string, link: string }[] = []; // Speichert die Optionen für das erste Dropdown-Menü, die dynamisch geladen werden
  options2 = [
    { name: 'Normale Übung', link: '/normaluebungen' },
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
   * @param userService Der Service, der die Benutzerdaten lädt
   * @param http HttpClient für die HTTP-Kommunikation
   */
  constructor(
    private fachService: FachService,
    private userService: UserService, // Hinzufügen des UserService
    private http: HttpClient
  ) {}

  /**
   * Lifecycle-Hook, der nach der Initialisierung der Komponente aufgerufen wird.
   * Lädt die Fächer, den Benutzernamen und den Logout-Link beim Start der Komponente.
   */
  ngOnInit() {
    this.loadFaecher(); // Lädt die Fächer für das erste Dropdown-Menü
    this.loadUserName(); // Lädt den Benutzernamen
    this.loadLogoutLink(); // Lädt den Logout-Link
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
        this.options1 = data.map(item => ({
          name: item.fach,
          link: `/${item.fach.replace(/ /g, '').toLowerCase()}`
        }));
      },
      error: (error) => {
        console.error('Fehler beim Laden der Fächer:', error);
      }
    });
  }

  /**
   * Lädt den Benutzernamen vom UserService und speichert ihn in der Komponente.
   */
  loadUserName() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.username = user.Vorname; // Weist den Vornamen des Benutzers der Variable zu
      },
      error: (error) => {
        console.error('Fehler beim Abrufen des Benutzernamens:', error);
        this.username = 'Benutzer'; // Fallback-Name, falls der Abruf fehlschlägt
      }
    });
  }

  /**
   * Lädt den Logout-Link von der API und speichert ihn in der Komponente.
   */
  loadLogoutLink() {
    this.http.get<{ url: string }>('/logout/link').subscribe({
      next: (response) => {
        this.logoutLink = response.url;
      },
      error: (error) => {
        console.error('Fehler beim Abrufen des Links:', error);
        this.logoutLink = '#'; // Fallback-URL, falls der API-Aufruf fehlschlägt
      }
    });
  }
}
