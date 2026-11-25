import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DrinkCategoryLabelPipe } from './pipes/drink-category-label.pipe';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DrinkDetailComponent } from './components/drink-detail/drink-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { notFoundInterceptor } from './interceptors/not-found.interceptor';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkCardComponent,
    DrinkCategoryLabelPipe,
    DrinkDetailComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    provideHttpClient(withInterceptors([notFoundInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
