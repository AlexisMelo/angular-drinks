import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf, CurrencyPipe } from '@angular/common';
import { DrinkCategoryLabelPipe } from '../../pipes/drink-category-label.pipe';

@Component({
    selector: 'app-drink-detail',
    templateUrl: './drink-detail.component.html',
    styleUrl: './drink-detail.component.scss',
    imports: [
        RouterLink,
        NgIf,
        CurrencyPipe,
        DrinkCategoryLabelPipe,
    ],
})
export class DrinkDetailComponent implements OnInit {
  private drinkService = inject(DrinkService);

  private activatedRoute = inject(ActivatedRoute);

  drink?: Drink = undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const drinkId = paramMap.get('drinkId')!;
      this.drinkService.getDrink(drinkId).subscribe({
        next: (drink) => (this.drink = drink),
        error: (error) => {},
        complete: () => console.log('complete'),
      });
    });
  }
}
