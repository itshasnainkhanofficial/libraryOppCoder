import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorhandlingService } from './errorhandling.service';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // for online 
  // private baseUrl = 'api';


  // for local 
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient : HttpClient , private errHandlerService : ErrorhandlingService) { }


  //general all https methods like get post 
  getMethod(url : string) : Observable<any>  {

    return this.httpClient.get(this.baseUrl+url).pipe(
      
     catchError(this.errHandlerService.handleError) 
     
    )
}
  postMethod(url : string , data : any) : Observable<any>  {

    return this.httpClient.post(this.baseUrl+url , data ).pipe(
      
     catchError(this.errHandlerService.handleError)
     
    )
}

}
