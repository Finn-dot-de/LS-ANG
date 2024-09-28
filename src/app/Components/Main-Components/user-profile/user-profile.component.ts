import { Component, OnInit } from '@angular/core'; // Importiert die notwendigen Angular-Dekoratoren und das OnInit-Interface
import { AuthService, User } from '../../Services/AuthService/auth.service'; // Importiert den AuthService und die User-Schnittstelle für die Benutzerverwaltung

/**
 * UserProfileComponent zeigt das Benutzerprofil an und lädt die Benutzerdaten aus dem AuthService.
 * Diese Komponente ist eigenständig und benötigt keine Modulabhängigkeiten.
 */
@Component({
  selector: 'app-user-profile', // Definiert den CSS-Selector, der verwendet wird, um die Komponente in Templates einzubinden
  templateUrl: './user-profile.component.html', // Verknüpft das HTML-Template, das die Ansicht der Komponente definiert
  standalone: true, // Gibt an, dass die Komponente eigenständig ist und keine Abhängigkeiten von Angular-Modulen hat
  styleUrls: ['./user-profile.component.css'] // Verknüpft die CSS-Datei für das Styling der Komponente
})
export class UserProfileComponent implements OnInit {
  user: User | null = null; // Hält die Benutzerdaten, die aus dem AuthService abgerufen werden; initial null, bis Daten geladen sind

  /**
   * Konstruktor der Komponente, injiziert den AuthService, um Benutzerdaten zu erhalten.
   * @param authService Service, der die Authentifizierungs- und Benutzerverwaltungsfunktionen bereitstellt
   */
  constructor(private authService: AuthService) { }

  /**
   * Lifecycle-Hook, der nach der Initialisierung der Komponente aufgerufen wird.
   * Hier werden die Benutzerdaten aus dem AuthService abgerufen.
   */
  ngOnInit(): void {
    // Abonniert den getUser()-Stream des AuthService, um die aktuellen Benutzerdaten zu erhalten
    this.authService.getUser().subscribe((user: User) => {
      this.user = user; // Weist die abgerufenen Benutzerdaten der user-Variable zu
    });
  }
}
