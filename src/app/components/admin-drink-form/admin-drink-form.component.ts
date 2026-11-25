import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DrinkCategory } from '../../models/drink.model';

@Component({
  selector: 'app-admin-drink-form',
  standalone: false,

  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss',
})
export class AdminDrinkFormComponent {
  formGroup = new FormGroup({
    name: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
    price: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0.01)],
      nonNullable: true,
    }),
    description: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    category: new FormControl<DrinkCategory>('sweet', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    image: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  drinksImageUrls = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png',
  ];

  createDrink() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;

    const formValue = this.formGroup.getRawValue();
  }

  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
