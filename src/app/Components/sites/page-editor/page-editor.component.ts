import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../Services/PageService/page.service';
import {NgIf} from "@angular/common";
import {QuillEditorComponent} from "ngx-quill";
import {FormsModule} from "@angular/forms";  // Service importieren

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  standalone: true,
  imports: [
    NgIf,
    QuillEditorComponent,
    FormsModule
  ],
  styleUrls: ['./page-editor.component.scss']
})
export class PageEditorComponent implements OnInit {
  editorContent: string = '';  // Editor-Inhalt
  fach: string = '';  // Fach-Parameter aus der URL
  isEditing: boolean = false;  // Zustand, ob im Bearbeitungsmodus oder nicht

  constructor(private pageService: PageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // URL-Parameter 'fach' abrufen
    this.route.paramMap.subscribe(params => {
      this.fach = params.get('fach') || '';  // Fach-Parameter holen
      this.loadPage();  // Seite laden
    });
  }

  // Seite laden
  loadPage() {
    this.pageService.loadPage(this.fach).subscribe({
      next: (response: { content: string; }) => {
        this.editorContent = response.content;  // Inhalt im Editor anzeigen
      },
      error: (error: any) => {
        console.error('Fehler beim Laden der Seite', error);
        if (error.status === 404) {
          alert('Seite nicht gefunden. Erstelle eine neue Seite.');
          this.editorContent = '';  // Leeren Editor anzeigen
          this.isEditing = true;  // In den Bearbeitungsmodus wechseln
        }
      }
    });
  }

  // Umschalten zwischen Bearbeiten und Vorschau
  toggleEditMode() {
    this.isEditing = !this.isEditing;  // Modus wechseln
  }

  // Seite speichern
  savePage() {
    if (!this.editorContent.trim()) {
      alert("Seiteninhalt darf nicht leer sein.");
      return;
    }

    this.pageService.savePage(this.fach, this.editorContent).subscribe({
      next: (response: any) => {
        console.log('Seite erfolgreich gespeichert', response);
        alert('Seite erfolgreich gespeichert!');
        this.isEditing = false;  // Nach dem Speichern wieder in den Vorschau-Modus wechseln
      },
      error: (error: any) => {
        console.error('Fehler beim Speichern der Seite', error);
        alert('Fehler beim Speichern der Seite.');
      }
    });
  }

}
