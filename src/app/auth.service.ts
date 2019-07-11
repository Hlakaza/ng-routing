import { Injectable, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;


  constructor(private router: Router) {
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 200);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
