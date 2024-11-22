import {inject, Injectable} from '@angular/core';
import {Drink} from '../models/drink.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private httpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:3000';

  getDrinks() {
    return this.httpClient.get<Drink[]>(`${this.apiUrl}/drinks`);
  }

  getDrink(drinkId: string) {
    return this.httpClient.get<Drink>(`${this.apiUrl}/drinks/${drinkId}`);
  }

  createDrink(drink: Drink) {
    return this.httpClient.post(`${this.apiUrl}/drinks`, drink);
  }

  updateDrink(drinkId: string, drink: Drink) {
    return this.httpClient.put(`${this.apiUrl}/drinks/${drinkId}`, drink);
  }
}
