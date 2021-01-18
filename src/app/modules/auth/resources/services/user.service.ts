import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { loginInterface } from "../models/login";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }


  userLogin(data : loginInterface): Observable<User> {
    return this.http.postMethod('/' , data );
    
  }

  register(user){
    
    return this.http.postMethod(`/register` , user);
    
  }
}
