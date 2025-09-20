import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _loggedIn = signal(false);

  get isLoggedIn() {
    return this._loggedIn();
  }

  login(username: string, password: string): boolean {
    // Dummy login: accept any non-empty username/password
    if (username && password) {
      this._loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this._loggedIn.set(false);
  }
}
