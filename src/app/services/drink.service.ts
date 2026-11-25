import { inject, Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  private httpClient = inject(HttpClient);

  private baseUrl = 'http://localhost:3000/drinks';

  getDrinks() {
    return this.httpClient.get<Drink[]>(this.baseUrl);
  }

  getDrink(drinkId: string) {
    return this.httpClient.get<Drink>(`${this.baseUrl}/${drinkId}`);
  }

  createDrink(drink: Drink) {
    return this.httpClient.post<Drink>(`${this.baseUrl}`, drink);
  }

  updateDrink(drinkId: string, drink: Drink) {
    return this.httpClient.put<Drink>(`${this.baseUrl}/${drinkId}`, drink);
  }

  deleteDrink(drinkId: string) {
    return this.httpClient.delete(`${this.baseUrl}/${drinkId}`);
  }
}
