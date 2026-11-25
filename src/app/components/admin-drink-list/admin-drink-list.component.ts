import { Component, inject, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-admin-drink-list',
  standalone: false,

  templateUrl: './admin-drink-list.component.html',
  styleUrl: './admin-drink-list.component.scss',
})
export class AdminDrinkListComponent implements OnInit {
  private drinkService = inject(DrinkService);

  drinks: Drink[] = [];

  ngOnInit(): void {
    this.drinkService.getDrinks().subscribe((drinks) => (this.drinks = drinks));
  }
}
