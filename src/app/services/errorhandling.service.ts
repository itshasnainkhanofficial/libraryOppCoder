import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlingService {

  constructor() { }


  handleError(err : HttpErrorResponse){
    console.log("error api")
  const error = err.error;
  const keys = Object.keys(error);
  const key = keys[0];
  let message = error[key];
  
  if (err.status === 401) {
    // auth token delete
    // redirect login page
  }
  else if (err.status === 404) {
    // auth token delete
    // redirect login page
    message = "page not found"
  }
  else if (error[key] instanceof Array) {
    message = error[key][0];
  }
  else if (key === 'isTrusted') {
    // this will occur when not connected to internet
    message = "internet not connected"
  } else {
    message = key + ' : ' + message;
  }
  // call snackbar and show error with message
  return throwError({messagess: message, error});

  
}
}
