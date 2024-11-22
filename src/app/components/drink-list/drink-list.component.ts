import {Component, inject, OnInit} from '@angular/core';
import {DrinkService} from '../../services/drink.service';
import {Drink} from '../../models/drink.model';

@Component({
  selector: 'app-drink-list',
  standalone: false,
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent implements OnInit {

  private drinkService = inject(DrinkService);

  drinks!: Drink[];

  ngOnInit(): void {
    this.drinkService.getDrinks().subscribe(drinks => this.drinks = drinks);
  }

}
