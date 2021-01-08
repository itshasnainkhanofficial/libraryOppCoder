import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin } from 'backend/server/models/login';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }


  userLogin(data : userLogin): Observable<any> {

    return this.http.postMethod('/' , data );
    
  }

  register(user){
    
    return this.http.postMethod(`/register` , user);
    
  }
}
