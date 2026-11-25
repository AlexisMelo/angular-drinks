import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { notFoundInterceptor } from './app/interceptors/not-found.interceptor';

registerLocaleData(localeFr);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    provideHttpClient(withInterceptors([notFoundInterceptor])),
  ],
}).catch((err) => console.error(err));
