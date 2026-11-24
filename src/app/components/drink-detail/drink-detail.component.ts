import { Component } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-detail',
  standalone: false,

  templateUrl: './drink-detail.component.html',
  styleUrl: './drink-detail.component.scss',
})
export class DrinkDetailComponent {
  drink: Drink = {
    id: '92a1',
    name: 'Taiwanese Cafe Latte',
    price: 1.99,
    description: 'Lorem ipsum',
    category: 'sweet',
    image: 'drinks/taiwanese-tea-cafe-latte.png',
  };
}
