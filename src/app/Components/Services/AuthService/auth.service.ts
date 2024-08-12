import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  // Speichern Sie den Anmeldestatus im localStorage
  setLoginStatus(status: boolean): void {
    localStorage.setItem('isLoggedIn', String(status));
  }

  // Abrufen des Anmeldestatus aus dem localStorage
  getLoginStatus(): boolean {
    const status = localStorage.getItem('isLoggedIn');
    return (status === 'true');
  }
}
