import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Example: Add Authorization header
    const username = '11247812';
    const password = '60-dayfreetrial';
    const basicAuth = btoa(`${username}:${password}`);
    debugger
    const authReq = req.clone({
      setHeaders: {
           Authorization: `Basic ${basicAuth}`,
          'Content-Type': 'application/json',
      }
    });

    // Log response
    return next.handle(authReq).pipe(
      tap(
        event => {
          // Success logging here if needed
        },
        error => {
          console.error('Request error:', error);
        }
      )
    );
  }
}
