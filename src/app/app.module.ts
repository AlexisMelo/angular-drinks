import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DrinkListComponent} from './components/drink-list/drink-list.component';
import {DrinkCardComponent} from './components/drink-card/drink-card.component';
import {DrinkDetailsComponent} from './components/drink-details/drink-details.component';
import {AdminDrinkListComponent} from './components/admin-drink-list/admin-drink-list.component';
import {AdminDrinkFormComponent} from './components/admin-drink-form/admin-drink-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DrinkCategoryLabelPipe} from './pipes/drink-category-label.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkCardComponent,
    DrinkDetailsComponent,
    AdminDrinkListComponent,
    AdminDrinkFormComponent,
    NotFoundComponent,
    DrinkCategoryLabelPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
