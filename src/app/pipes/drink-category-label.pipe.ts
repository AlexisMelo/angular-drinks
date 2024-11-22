import {Pipe, PipeTransform} from '@angular/core';
import {DrinkCategory} from '../models/drink.model';

@Pipe({
  name: 'drinkCategoryLabel',
  standalone: false
})
export class DrinkCategoryLabelPipe implements PipeTransform {

  transform(drinkCategory: DrinkCategory): string {
    switch (drinkCategory) {
      case "sweet":
        return 'Sweet';
      case "low-sugar":
        return 'Low Sugar';
      case "no-sugar":
        return 'No Sugar';
    }
  }

}
