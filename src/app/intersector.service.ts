import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IntersectorService {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const basicAuth =
      'Basic ' + btoa(environment.dbUserName + ':' + environment.dbPassword);

    const url = environment.url;

    request = request.clone({
      setHeaders: {
        Authorization: `${basicAuth}`,
      },
    });
    return next.handle(request);
  }
}
