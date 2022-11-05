import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
          }
          else {
            switch (error.status) {
              case 400:
                errorMsg = "Bad Request.";
                break;
              case 401:
                errorMsg = "You need to log in to do this action.";
                break;
              case 403:
                errorMsg = "You don't have permission to access the requested resource.";
                break;
              case 404:
                errorMsg = "The requested resource does not exist.";
                break;
              case 412:
                errorMsg = "Precondition Failed.";
                break;
              case 500:
                errorMsg = "Internal Server Error.";
                break;
              case 503:
                errorMsg = "The requested service is not available.";
                break;
              default:
                errorMsg = "Something went wrong!";
            }
          }
          alert(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
