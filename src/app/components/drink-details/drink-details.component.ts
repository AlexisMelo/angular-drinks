import {Component, inject, OnInit} from '@angular/core';
import {DrinkService} from '../../services/drink.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Drink} from '../../models/drink.model';

@Component({
  selector: 'app-drink-details',
  standalone: false,
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private drinkService = inject(DrinkService);

  drink!: Drink;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const drinkId = paramMap.get('drinkId')!;
      this.drinkService.getDrink(drinkId).subscribe({
        next: drink => {
          this.drink = drink;
        },
        error: err => {
          // if (err instanceof HttpErrorResponse && err.status === 404) {
          //   this.router.navigate(['/drinks']);
          // }
        }
      })
    });
  }

}
