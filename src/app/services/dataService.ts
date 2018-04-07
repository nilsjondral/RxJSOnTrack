import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

    constructor() {
    }

    getStreamOfNumbers() {
      return of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    }

    getStreamOfArrayWithNumbers() {
      return of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }

    getStreamOfLetters() {
      return of('a', 'b', 'c', 'a', 'a', 'c', 'd');
    }
}
