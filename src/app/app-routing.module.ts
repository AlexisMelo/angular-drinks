import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkDetailComponent } from './components/drink-detail/drink-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'drinks', pathMatch: 'full' },
  { path: 'drinks', component: DrinkListComponent },
  { path: 'drinks/:drinkId', component: DrinkDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
