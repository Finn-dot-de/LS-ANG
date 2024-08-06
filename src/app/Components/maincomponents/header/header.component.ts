import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { AuthService } from 'src/app/auth.service';
import { FachService } from 'src/app/fach.service';
import { Fach } from 'src/app/fach.model';  // Importieren Sie die Schnittstelle

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

  constructor(private authService: AuthService, private fachService: FachService) { }

  ngOnInit() {
    this.loadFeacher();
  }

  loadFeacher() {
    this.fachService.getFeacher().subscribe((data: Fach[]) => {
      this.options1 = data.map((fach: Fach) => ({
        name: fach.fach,
        link: `/${fach.fach.replace(/ /g, '').toLowerCase()}`
      }));
    });
  }

  logout() {
    this.authService.setLoginStatus(false);
    window.location.reload();
  }
}
