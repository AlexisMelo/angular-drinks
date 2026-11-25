import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-drink-detail',
  standalone: false,

  templateUrl: './drink-detail.component.html',
  styleUrl: './drink-detail.component.scss',
})
export class DrinkDetailComponent implements OnInit {
  private drinkServie = inject(DrinkService);

  private activatedRoute = inject(ActivatedRoute);

  private router = inject(Router);

  drink?: Drink = undefined;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const drinkId = paramMap.get('drinkId')!;
      this.drinkServie.getDrink(drinkId).subscribe({
        next: (drink) => (this.drink = drink),
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              this.router.navigate(['not-found'], { skipLocationChange: true });
            }
          }
        },
        complete: () => console.log('complete'),
      });
    });
  }
}
