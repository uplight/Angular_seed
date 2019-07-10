import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): any {
    switch (value) {
      case 1: return 20;
      case 2: return 30;
      case 3: return 50;
      case 4: return 65;
      case 5: return 100;
    }
    return 0;
  }

}
