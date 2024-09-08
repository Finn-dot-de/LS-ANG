import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {
  markdownContent: string = '';
  apiUrl: string = 'https://api.example.com/pages'; // Deine API-URL
  fach: string = '';  // Der Fach-Parameter aus der URL

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Den Parameter 'fach' aus der URL holen
    this.route.paramMap.subscribe(params => {
      this.fach = params.get('fach') || ''; // Hole den Wert für das Fach (z.B. 'awp', 'pug')
      this.loadPage();  // Lade die entsprechende Seite basierend auf dem Fach
    });
  }

// Seite über POST speichern
  savePage() {
    const body = { content: this.markdownContent };
    this.http.post(`${this.apiUrl}/${this.fach}`, body).subscribe({
      next: (response) => {
        console.log('Seite erfolgreich gespeichert', response);
        alert('Seite wurde erfolgreich gespeichert!');
      },
      error: (error) => {
        console.error('Fehler beim Speichern der Seite', error);
        alert('Fehler beim Speichern der Seite.');
      }
    });
  }



// Seite über GET holen, basierend auf dem Fach
  loadPage() {
    this.http.get<{ content: string }>(`${this.apiUrl}/${this.fach}`).subscribe({
      next: (response) => {
        this.markdownContent = response.content;  // Den Inhalt im Textfeld anzeigen
      },
      error: (error) => {
        console.error('Fehler beim Laden der Seite', error);
        this.markdownContent = '# Seite nicht gefunden';
      }
    });
  }
}
