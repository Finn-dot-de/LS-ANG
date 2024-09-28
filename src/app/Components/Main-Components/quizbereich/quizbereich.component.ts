// Importieren Sie die notwendigen Module und Funktionen
import { Component, OnInit } from '@angular/core'; // Importiert die Angular-Dekoratoren und das OnInit-Interface
import { HttpClient } from '@angular/common/http'; // Importiert HttpClient, um HTTP-Anfragen an die API zu senden
import { CommonModule } from '@angular/common'; // Importiert CommonModule für grundlegende Angular-Direktiven

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
  imports: [CommonModule] // Importiert das CommonModule, um grundlegende Angular-Direktiven zu nutzen
})
export class QuizbereichComponent implements OnInit {
  items: Frage[] = []; // Ein Array von Fragen, das die Fragen und Antworten speichert
  showResults = false; // Eine Variable, die bestimmt, ob die Ergebnisse angezeigt werden sollen

  /**
   * Der Konstruktor der Komponente, der das HttpClient-Modul injiziert.
   * @param http HttpClient, um HTTP-Anfragen an die API zu stellen
   */
  constructor(private http: HttpClient) { }

  /**
   * Methode, um die Reihenfolge der möglichen Antworten zufällig zu ändern.
   * Diese Methode verwendet den Fisher-Yates Shuffle Algorithmus.
   * @param array Das Array, das gemischt werden soll
   */
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // Wählt eine zufällige Position aus dem Array
      [array[i], array[j]] = [array[j], array[i]]; // Tauscht die aktuelle Position mit der zufälligen Position
    }
  }

  /**
   * Initialisiert die Komponente und lädt die Fragen, wenn die Komponente erstellt wird.
   * Die Fragen werden durch einen API-Aufruf abgerufen und die Antworten werden gemischt.
   */
  ngOnInit() {
    // Ruft die Fragen von der API ab und abonniert die Rückgabe
    this.getFragen().subscribe(data => {
      // Wandelt die Daten in das benötigte Format um und fügt `istAusgewaehlt: false` zu jeder Antwort hinzu
      this.items = data.map(frage => {
        let antworten = frage.antworten.map((antwort: any) => ({
          ...antwort,
          istAusgewaehlt: false // Setzt den Initialzustand für die Auswahl
        }));
        // Mischen Sie die Antworten, um die Reihenfolge zufällig zu gestalten
        this.shuffleArray(antworten);
        return {
          frage: frage.frageText, // Setzt den Text der Frage
          antworten: antworten // Setzt die gemischten Antworten
        };
      });
    });
  }

  /**
   * Die getFragen-Methode, die eine HTTP-GET-Anfrage an die angegebene URL sendet und ein Observable zurückgibt.
   * @returns Ein Observable, das ein Array von Fragen als Antwort erhält
   */
  getFragen() {
    return this.http.get<any[]>('/app/api/fragen'); // Sendet eine GET-Anfrage an die API, um die Fragen abzurufen
  }

  /**
   * Die selectAnswer-Methode, die aufgerufen wird, wenn auf ein <li>-Element geklickt wird.
   * Diese Methode toggelt die Auswahl einer Antwort.
   * @param antwort Das Antwort-Objekt, das ausgewählt oder abgewählt wird
   */
  selectAnswer(antwort: Antwort) {
    antwort.istAusgewaehlt = !antwort.istAusgewaehlt; // Ändert den Wert von istAusgewaehlt, um die Auswahl zu toggeln
  }

  /**
   * Die checkAnswers-Methode, die aufgerufen wird, wenn auf die Schaltfläche "Überprüfen" geklickt wird.
   * Diese Methode zeigt die Ergebnisse des Quiz an.
   */
  checkAnswers() {
    this.showResults = true; // Setzt showResults auf true, um die Ergebnisse sichtbar zu machen
  }
}
