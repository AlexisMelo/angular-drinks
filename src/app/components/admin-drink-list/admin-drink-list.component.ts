import { Component, inject, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../models/drink.model';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { DrinkCardComponent } from '../drink-card/drink-card.component';

@Component({
    selector: 'app-admin-drink-list',
    templateUrl: './admin-drink-list.component.html',
    styleUrl: './admin-drink-list.component.scss',
    imports: [
        RouterLink,
        NgFor,
        DrinkCardComponent,
    ],
})
export class AdminDrinkListComponent implements OnInit {
  private drinkService = inject(DrinkService);

  drinks: Drink[] = [];

  ngOnInit(): void {
    this.drinkService.getDrinks().subscribe((drinks) => (this.drinks = drinks));
  }
}
