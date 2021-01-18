import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibraryState } from 'src/app/store';
import { selectRole } from "src/app/store/selectors/auth.selectors";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store : Store<LibraryState> , private route : Router){}
  isAdmin : boolean;
  canActivate(): boolean {
    this.store.pipe(select(selectRole)).subscribe((bool) => {
      if(bool == 1){
        this.isAdmin = true
      }
      else{
        this.isAdmin = false
        this.route.navigate(['/home']);
      }
    })
    return this.isAdmin
  }
  
}
