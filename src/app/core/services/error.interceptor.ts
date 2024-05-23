import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ErrorHandlerService} from '../services/error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorHandlerService: ErrorHandlerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandlerService.handleError(error);
        return throwError(error);
      })
    );
  }
}
