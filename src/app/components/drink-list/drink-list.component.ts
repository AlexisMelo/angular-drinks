import { Component } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-list',
  standalone: false,

  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss',
})
export class DrinkListComponent {
  drinks: Drink[] = [
    {
      id: '92a1',
      name: 'Taiwanese Cafe',
      price: 1.99,
      description: 'Lorem ipsum',
      category: 'sweet',
      image: 'drinks/taiwanese-tea-cafe-latte.png',
    },
    {
      id: '34k1',
      name: 'Matcha Latte',
      price: 1.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/matcha-latte.png',
    },
    {
      id: '03b5',
      name: 'Cafe Latte',
      price: 0.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/cafe-latte.png',
    },
    {
      id: '9250',
      name: 'Cappucino',
      price: 0.99,
      description: 'Lorem ipsum',
      category: 'low-sugar',
      image: 'drinks/cappuccino.png',
    },
  ];

  showLog(drink: Drink) {
    console.log(drink);
  }
}
