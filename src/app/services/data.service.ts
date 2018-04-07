import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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

  getBackendData(searchTerm?: string, page: number = 0) {
    return Observable.ajax(`http://whatever.com/api/items?term=${searchTerm}&page=${page}`)
      .pipe(map(response => response.response));
  }

  uploadPicture(imgUrl) {
    return of('success');
  }
}
