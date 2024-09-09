// Importieren Sie die notwendigen Module und Funktionen
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Definieren Sie die Antwort-Schnittstelle
interface Antwort {
  antwort: string; // Die Antwort als String
  istKorrekt: boolean; // Gibt an, ob die Antwort korrekt ist
  istAusgewaehlt?: boolean; // Optional: Gibt an, ob die Antwort ausgewählt wurde
}

// Definieren Sie die Frage-Schnittstelle
interface Frage {
  frage: string; // Die Frage als String
  antworten: Antwort[]; // Ein Array von Antworten
}

// Deklarieren die Komponente mit Metadaten
@Component({
  selector: 'app-quizbereich', // Der CSS-Selektor, um die Komponente in einer Vorlage zu verwenden
  templateUrl: './quizbereich.component.html', // Der Pfad zur HTML-Vorlage der Komponente
  styleUrls: ['./quizbereich.component.scss'], // Der Pfad zur CSS-Datei der Komponente
  standalone: true, // Gibt an, ob die Komponente eigenständig ist
  imports: [CommonModule] // Importiert das CommonModule
})
export class QuizbereichComponent implements OnInit {
  items: Frage[] = []; // Ein Array von Fragen
  showResults = false; // Eine Variable, die bestimmt, ob die Ergebnisse angezeigt werden sollen

  // Der Konstruktor der Komponente, der das HttpClient-Modul injiziert
  constructor(private http: HttpClient) { }

  // Ändert die Reihenfolge der möglichen Antworten
shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Inisalisert die Componente
ngOnInit() {
  this.getFragen().subscribe(data => {
    this.items = data.map(frage => {
      let antworten = frage.antworten.map((antwort: any) => ({
        ...antwort,
        istAusgewaehlt: false
      }));
      // Mischen Sie die Antworten
      this.shuffleArray(antworten);
      return {
        frage: frage.frageText,
        antworten: antworten
      };
    });
  });
}

  // Die getFragen-Methode, die eine HTTP-GET-Anfrage an die angegebene URL sendet und ein Observable zurückgibt
  getFragen() {
    return this.http.get<any[]>('/app/api/fragen');
  }

  // Die selectAnswer-Methode, die aufgerufen wird, wenn auf ein <li>-Element geklickt wird
  selectAnswer(antwort: Antwort) {
    antwort.istAusgewaehlt = !antwort.istAusgewaehlt; // Ändert den Wert von istAusgewaehlt
  }

  // Die checkAnswers-Methode, die aufgerufen wird, wenn auf die Schaltfläche "Überprüfen" geklickt wird
  checkAnswers() {
    this.showResults = true; // Setzt showResults auf true
  }
}
