import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      console.log('you need to log in first');
      return false;
    }
  }

//   isAdmin(): boolean {
//     if (this.auth.isAuthenticated() && this.auth.getProfile().roles.includes('admin')) {
//       return true;
//     }
//     return false;
//   }
// }
