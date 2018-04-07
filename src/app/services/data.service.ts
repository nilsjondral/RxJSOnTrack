import {Observable} from 'rxjs/Observable';

export class DataService {

  constructor() {
  }

  getStreamOfNumbers() {
    return Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  getStreamOfArrayWithNumbers() {
    return Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }

  getStreamOfLetters() {
    return Observable.of('a', 'b', 'c', 'a', 'a', 'c', 'd');
  }

  getBackendData(searchTerm?: string, page: number = 0) {
    return Observable.ajax(`http://whatever.com/api/items?term=${searchTerm}&page=${page}`)
      .map(response => response.response);
  }

  uploadPicture(imgUrl) {
    return Observable.of('success');
  }
}
