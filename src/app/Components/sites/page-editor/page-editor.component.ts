import { Component, OnInit } from '@angular/core'; // Importiert die benötigte Dekoration für Angular-Komponenten und das OnInit-Interface
import { ActivatedRoute } from '@angular/router'; // Importiert die ActivatedRoute, um URL-Parameter zu lesen
import { PageService } from '../../Services/PageService/page.service'; // Importiert den PageService für die Kommunikation mit der Backend-API
import { NgIf } from "@angular/common"; // Importiert NgIf für die konditionelle Anzeige von DOM-Elementen
import { QuillEditorComponent } from "ngx-quill"; // Importiert den Quill-Editor zur Bearbeitung des Inhalts
import { FormsModule } from "@angular/forms"; // Importiert FormsModule für Template-gebundenes Formularhandling
import { UserService } from '../../Services/UserService/user.service'; // Importiert den UserService zum Abrufen der Benutzerinformationen

@Component({
  selector: 'app-page-editor', // Definiert den CSS-Selector, um die Komponente in Templates zu verwenden
  templateUrl: './page-editor.component.html', // Verknüpft die HTML-Template-Datei mit der Komponente
  standalone: true, // Gibt an, dass die Komponente eigenständig ist und keine Modulabhängigkeiten erfordert
  imports: [
    NgIf, // Importiert das NgIf-Directive für die Template-Nutzung
    QuillEditorComponent, // Importiert die QuillEditor-Komponente zur Nutzung im Template
    FormsModule // Importiert FormsModule für Template-gebundene Formulare
  ],
  styleUrls: ['./page-editor.component.scss'] // Verknüpft die SCSS-Datei zur Komponente für das Styling
})
export class PageEditorComponent implements OnInit {
  editorContent: string = '';  // Hält den Inhalt des Editors als String
  fach: string = '';  // Speichert den Fach-Parameter aus der URL
  isEditing: boolean = false;  // Steuert, ob der Bearbeitungsmodus aktiv ist
  userRole: string = ''; // Speichert die Rolle des aktuellen Benutzers

  /**
   * Konstruktor der Komponente, injiziert benötigte Services.
   * @param pageService Der Service, der für das Laden und Speichern von Seiteninhalten verantwortlich ist
   * @param route Aktivierte Route, um URL-Parameter zu lesen
   * @param userService Service, um Benutzerdaten, inklusive der Rolle, zu erhalten
   */
  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private userService: UserService // Injiziert den UserService, um auf Benutzerinformationen zuzugreifen
  ) {}

  /**
   * Lifecycle-Hook, der nach der Initialisierung der Komponente aufgerufen wird.
   * Hier werden die Fachparameter aus der URL gelesen und die Benutzerrolle geladen.
   */
  ngOnInit(): void {
    // Abonniert die Parameter der Route, um den Wert des 'fach'-Parameters zu erhalten
    this.route.paramMap.subscribe(params => {
      this.fach = params.get('fach') || '';  // Weist den Wert von 'fach' der Komponente zu oder setzt auf leer, falls nicht vorhanden
      this.loadPage();  // Lädt die Seite basierend auf dem Fachparameter
    });

    // Ruft die aktuelle Benutzerrolle vom UserService ab
    this.userService.getCurrentUser().subscribe(user => {
      this.userRole = user.Rolle; // Setzt die Benutzerrolle basierend auf den erhaltenen Daten
    });
  }

  /**
   * Lädt die Seite anhand des Fachparameters.
   * Der Inhalt wird aus dem PageService abgerufen und in den Editor geladen.
   * Bei einem 404-Fehler wird der Editor in den Bearbeitungsmodus versetzt.
   */
  loadPage(): void {
    this.pageService.loadPage(this.fach).subscribe({
      next: (content: string) => {
        this.editorContent = content;  // Setzt den abgerufenen Text in den Editor
      },
      error: (error: any) => {
        console.error('Fehler beim Laden der Seite', error);
        if (error.status === 404) {
          alert('Seite nicht gefunden. Erstelle eine neue Seite.');
          this.editorContent = '';  // Leert den Editor für eine neue Seite
          if (this.canUserUse()) {
            this.isEditing = true;  // Schaltet den Bearbeitungsmodus ein
          }
        }
      }
    });
  }

  /**
   * Schaltet zwischen Bearbeitungs- und Vorschau-Modus.
   * Wenn der Bearbeitungsmodus aktiv ist, wird dieser beendet und umgekehrt.
   */
  toggleEditMode(): void {
    this.isEditing = !this.isEditing;  // Invertiert den aktuellen Zustand des Bearbeitungsmodus
  }

  /**
   * Speichert den aktuellen Inhalt der Seite.
   * Der Inhalt wird durch den PageService an das Backend gesendet.
   * Nach erfolgreichem Speichern wird wieder in den Vorschau-Modus gewechselt.
   */
  savePage(): void {
    // Verhindert das Speichern, wenn der Inhalt leer ist
    if (!this.editorContent.trim()) {
      alert("Seiteninhalt darf nicht leer sein.");
      return;
    }

    // Speichert die Seite über den PageService
    this.pageService.savePage(this.fach, this.editorContent).subscribe({
      next: (response: any) => {
        console.log('Seite erfolgreich gespeichert', response);
        alert('Seite erfolgreich gespeichert!');
        this.isEditing = false;  // Nach dem Speichern zurück in den Vorschau-Modus wechseln
      },
      error: (error: any) => {
        console.error('Fehler beim Speichern der Seite', error);
        alert('Fehler beim Speichern der Seite.');
      }
    });
  }

  /**
   * Prüft, ob der der Nutzerberechtigt ist.
   * Der Button wird nur angezeigt, wenn die Benutzerrolle 'admin' oder 'lehrer' ist.
   * @returns true, wenn der Benutzer die Rolle 'admin' oder 'lehrer' hat, sonst false
   */
  canUserUse(): boolean {
    return this.userRole === 'admin' || this.userRole === 'lehrer'; // Überprüft die Benutzerrolle
  }
}
