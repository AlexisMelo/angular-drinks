import {Component, inject, OnInit} from '@angular/core';
import {DrinkService} from '../../services/drink.service';
import {Drink, DrinkCategory} from '../../models/drink.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drink-form',
  standalone: false,
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent implements OnInit {

  private drinkService = inject(DrinkService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  drinksImageUrls = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

  drinkForm = new FormGroup({
    name: new FormControl<string>('', {validators: [Validators.required, Validators.minLength(3)], nonNullable: true}),
    price: new FormControl<number>(0, {validators: [Validators.required, Validators.min(0)], nonNullable: true}),
    description: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(10)],
      nonNullable: true
    }),
    category: new FormControl<DrinkCategory>('sweet', {validators: [Validators.required], nonNullable: true}),
    image: new FormControl<string>('', {validators: [Validators.required], nonNullable: true})
  });

  drink!: Drink;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (this.router.url.includes('/edit')) {
        const drinkId = paramMap.get('drinkId')!;
        this.drinkService.getDrink(drinkId).subscribe(drink => {
          this.drink = drink;
          this.fillForm(drink)
        });
      }
    });
  }

  fillForm(drink: Drink): void {
    this.drinkForm.patchValue(drink);
  }

  saveDrink() {
    this.drinkForm.markAllAsTouched();
    if (this.drinkForm.invalid) {
      return;
    }

    if (this.drink) {
      this.updateDrink();
    } else {
      this.createDrink();
    }
  }

  createDrink() {
    const formValue = this.drinkForm.getRawValue();
    this.drinkService.createDrink(formValue).subscribe(() => this.router.navigate(['/admin/drinks']));
  }

  updateDrink() {
    const formValue = this.drinkForm.getRawValue();
    this.drinkService.updateDrink(this.drink!.id!, formValue).subscribe(() => this.router.navigate(['/admin/drinks']));
  }
}
