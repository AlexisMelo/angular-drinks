import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AdminDrinkFormComponent} from './components/admin-drink-form/admin-drink-form.component';
import {AdminDrinkListComponent} from './components/admin-drink-list/admin-drink-list.component';
import {DrinkDetailsComponent} from './components/drink-details/drink-details.component';
import {DrinkListComponent} from './components/drink-list/drink-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'drinks', pathMatch: 'full'},
  {path: 'drinks', component: DrinkListComponent},
  {path: 'drinks/:drinkId', component: DrinkDetailsComponent},
  {path: 'admin/drinks', component: AdminDrinkListComponent},
  {path: 'admin/drinks/create', component: AdminDrinkFormComponent},
  {path: 'admin/drinks/:drinkId/edit', component: AdminDrinkFormComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
