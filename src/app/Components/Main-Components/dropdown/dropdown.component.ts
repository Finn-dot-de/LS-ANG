import { Component, Input } from '@angular/core'; // Importiert die notwendigen Angular-Dekoratoren und das Input-Dekorator für Datenbindung
import { CommonModule } from '@angular/common'; // Importiert CommonModule, um grundlegende Angular-Direktiven zu verwenden
import { RouterModule } from '@angular/router'; // Importiert RouterModule, um RouterLink für Navigation zu nutzen

/**
 * Die DropdownComponent stellt ein einfaches Dropdown-Menü bereit.
 * Die Optionen und der ausgewählte Wert können von der übergeordneten Komponente über Inputs gesteuert werden.
 */
@Component({
  selector: 'app-dropdown', // Der CSS-Selektor, um die Komponente in einer Vorlage zu verwenden
  standalone: true, // Gibt an, dass die Komponente eigenständig ist und keine Modulabhängigkeiten benötigt
  imports: [CommonModule, RouterModule], // Importiert notwendige Angular-Module für grundlegende Direktiven und Routing
  templateUrl: './dropdown.component.html', // Verknüpft die HTML-Vorlage, die die Benutzeroberfläche des Dropdown-Menüs definiert
  styleUrls: ['./dropdown.component.scss'] // Verknüpft die CSS-Datei für das Styling der Komponente
})
export class DropdownComponent {
  /**
   * @Input-Dekorator, um die Optionen des Dropdown-Menüs von der Elternkomponente zu erhalten.
   * Jede Option hat einen Namen und einen Link zur Navigation.
   */
  @Input()
  options: { name: string, link: string }[] = []; // Ein Array von Objekten, das die Optionen für das Dropdown-Menü speichert

  showDropdown = false; // Steuert die Sichtbarkeit des Dropdown-Menüs, initial nicht sichtbar

  /**
   * @Input-Dekorator, um den aktuell ausgewählten Wert von der Elternkomponente zu erhalten.
   * Der ausgewählte Wert wird als String dargestellt.
   */
  @Input() selectedValue: string = ''; // Speichert den aktuell ausgewählten Wert, initial leer

  /**
   * Schaltet die Sichtbarkeit des Dropdown-Menüs um.
   * Diese Methode wird aufgerufen, wenn der Benutzer auf das Dropdown klickt.
   */
  toggleDropdown() {
    this.showDropdown = !this.showDropdown; // Invertiert den aktuellen Zustand der Sichtbarkeit des Dropdown-Menüs
  }

  /**
   * Setzt den ausgewählten Wert basierend auf der gewählten Option und schließt das Dropdown-Menü.
   * @param option Die ausgewählte Option, die den Namen und den Link enthält
   */
  selectOption(option: { name: string, link: string }) {
    this.selectedValue = option.name; // Setzt den Namen der ausgewählten Option als den neuen ausgewählten Wert
    this.showDropdown = false; // Schließt das Dropdown-Menü nach der Auswahl
  }
}
