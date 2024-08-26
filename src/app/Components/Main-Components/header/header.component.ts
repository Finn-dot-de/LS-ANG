// header.component.ts
import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FachService } from 'src/app/Components/Services/FächerService/fach.service';
import { Fach } from 'src/app/Components/Services/FächerService/fach.model';  // Import der Schnittstelle
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [DropdownComponent],
})
export class HeaderComponent implements OnInit {
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

  constructor(private fachService: FachService) { }

  ngOnInit() {
    this.loadFaecher();
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

  logout() {
    window.location.reload();
  }
}
