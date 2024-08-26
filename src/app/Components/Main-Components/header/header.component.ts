import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FachService } from 'src/app/Components/Services/FächerService/fach.service';
import { Fach } from 'src/app/Components/Services/FächerService/fach.model';  // Import der Schnittstelle
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [DropdownComponent],
})
export class HeaderComponent implements OnInit {
  logoutLink: string = '';  // Initialisiert mit einem leeren String
  options1: { name: string, link: string }[] = [];
  options2 = [
    { name: 'Schnellübung', link: '/schnelluebung' },
    { name: 'Normale Übung', link: '/normaluebungen' },
    { name: 'Intensiveübungen', link: '/intensiveuebungen' },
    { name: 'Mischübungen', link: '/mischuebungen' },
  ];

  options3 = [
    { name: 'Langzeit', link: '/langzeit' },
    { name: 'Noch zu Üben', link: '/nochzueben' },
    { name: 'Eigene Übungen erstellen', link: '/eigeneuebungen' },
  ];

  selectedValue1 = 'Fächer';
  selectedValue2 = 'Übungen';
  selectedValue3 = 'Lernfortschritt';

<<<<<<< HEAD
  constructor(private authService: AuthService, private fachService: FachService, private http: HttpClient) { }
=======
  constructor(private fachService: FachService) { }
>>>>>>> 27292981fe9ba48a831d58cee868be451caaf4b4

  ngOnInit() {
    this.loadFaecher();
    // Abrufen des Links von der API
    this.http.get<{url: string}>('/api/link')
      .subscribe({
        next: (response) => {
          this.logoutLink = response.url;
        },
        error: (error) => {
          console.error('Fehler beim Abrufen des Links:', error);
          this.logoutLink = '#'; // Fallback, falls der API-Aufruf fehlschlägt
        }
      });
  }

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
<<<<<<< HEAD
=======

  logout() {
    window.location.reload();
  }
>>>>>>> 27292981fe9ba48a831d58cee868be451caaf4b4
}
