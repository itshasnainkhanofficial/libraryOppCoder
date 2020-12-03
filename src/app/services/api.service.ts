import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  //for books
  getAllBooks(): Observable<any> {
    
    return this.httpService.getMethod('/getbooks');
    
  }

}
