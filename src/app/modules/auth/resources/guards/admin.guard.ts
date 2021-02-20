import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  user: User = JSON.parse(localStorage.getItem('user'));
  canActivate(): boolean {
    if (this.user.user_role !== 1) {
      this.router.navigate(['book/booklist']);
      return false;
    }
    return true;
  }
}
