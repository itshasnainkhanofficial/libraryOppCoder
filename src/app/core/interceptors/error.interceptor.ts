// https://www.positronx.io/angular-error-handling-tutorial-with-examples/#:~:text=To%20handle%20errors%20properly%2C%20HttpInterceptor,%2C%20adding%20auth%20tokens%2C%20etc.
import {HttpEvent,HttpHandler,HttpRequest,HttpErrorResponse,HttpInterceptor} from '@angular/common/http';
import { fromEvent, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class ErrorIntercept implements HttpInterceptor {
    onlineEvent;
    intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request)
            .pipe(
                // retry(1),
                catchError((error: any) => {
                    // window.addEventListener('online', () => console.log('came online'));
                    // window.addEventListener('offline', () => console.log('came offline'));
                    this.onlineEvent = fromEvent(window, 'online');
                    

                    let errorMessage = '';
                    console.log(error)
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `client-side Error: ${error.error.message}`;
                    }
                    else {
                        // server-side error
                        if(error.error.customMessage){

                            errorMessage = `${error.error.customMessage}`;
                        }
                        else if(error.error.text){
                            errorMessage = `${error.error.text}`;

                        }

                        else if(error.error){
                            errorMessage = `${error.error}`;
                        }

                        else if(Object.keys(error.error)[0] === 'isTrusted'){
                            errorMessage = `internet not connected`;

                        }
                        else{
                            errorMessage = `something unexpected`;
                        }

                    }
                    

                    // console.log(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
}