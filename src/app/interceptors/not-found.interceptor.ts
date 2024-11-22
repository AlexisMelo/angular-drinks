import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError} from 'rxjs';
import {inject} from '@angular/core';
import {Router} from '@angular/router';

export const notFoundInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError(err => {
      if (err instanceof HttpErrorResponse && err.status === 404) {
        router.navigate(['/not-found']);
      }
      throw err;
    })
  );
};
