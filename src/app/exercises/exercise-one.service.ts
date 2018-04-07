import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class ExerciseOneService {

  constructor(private dataService: DataService) {
  }

  // TODO: Filter out the odd numbers events
  filterOutValues(): Observable<number> {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$;
  }

  // TODO: Multiply all the number events by two
  multiplyAllValuesByTwo() {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$;
  }

  // TODO: Every event is an array of numbers. Modify the event so the array only contains even numbers.
  filterOutValuesOfArray(): Observable<Array<number>> {
    const array$: Observable<Array<number>> = this.dataService.getStreamOfArrayWithNumbers();

    return array$;
  }

  // TODO: Every event is an array of numbers. Modify the event so every number in the array is multiplied by two.
  multiplyAllValuesByTwoOfArray(): Observable<Array<number>> {
    const array$: Observable<Array<number>> = this.dataService.getStreamOfArrayWithNumbers();

    return array$;
  }
}
