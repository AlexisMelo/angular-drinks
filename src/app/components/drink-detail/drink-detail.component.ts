import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink-detail',
  standalone: false,

  templateUrl: './drink-detail.component.html',
  styleUrl: './drink-detail.component.scss',
})
export class DrinkDetailComponent implements OnInit {
  private drinkServie = inject(DrinkService);

  private activatedRoute = inject(ActivatedRoute);

  drink?: Drink = undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const drinkId = paramMap.get('drinkId')!;
      this.drinkServie
        .getDrink(drinkId)
        .subscribe((drink) => (this.drink = drink));
    });
  }
}
