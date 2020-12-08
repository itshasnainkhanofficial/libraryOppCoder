import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerMessage } from '../shared/models/customer-message';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService : HttpService) { }

  //for msgs
  getAllMsgs(): Observable<any> {
    
    return this.httpService.getMethod('/getMsg');
    
  }
  
  sendMsg(data : CustomerMessage): Observable<any> {

    return this.httpService.postMethod('/sendMsg' , data );
    
  }

  confirmfunction(form : CustomerMessage){
    return form.name ? of(true) : of(false)
  }

  //for books
  getAllBooks(): Observable<any> {
    
    return this.httpService.getMethod('/getbooks');
    
  }

}
