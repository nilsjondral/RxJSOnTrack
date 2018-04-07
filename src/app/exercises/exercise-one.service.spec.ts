import { TestBed, inject } from '@angular/core/testing';

import { ExerciseOneService } from './exercise-one.service';
import { Observable } from 'rxjs/Observable';
import { marbles } from 'rxjs-marbles/marbles';

describe('ExerciseOneService', () => {
  // let service: ExerciseOneService;
  // let dataService;

  // beforeEach(() => {
  //   dataService = {
  //     getStreamOfNumbers: jest.fn(),
  //     getStreamOfArrayWithNumbers: jest.fn(),
  //     getStreamOfLetters: jest.fn(),
  //   };

  //   service = new ExerciseOneService(dataService);
  // });

  // describe('on filterOutValues', () => {
  //   it('should filter out all the odd values in the observable', () => {
  //     dataService.getStreamOfNumbers.mockReturnValue(Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

  //     const result$ = service.filterOutValues();

  //     result$.subscribe(val => expect(val % 2).toBe(0));
  //   });

  //   it('should filter out all the odd values in the observable with marble testing', marbles((m) => {
  //     const numbers$ = m.cold('0---1--2--345--6--7--8--9|');
  //     const result =          '0------2---4---6-----8---|';

  //     dataService.getStreamOfNumbers.mockReturnValue(numbers$);

  //     const result$ = service.filterOutValues();

  //     m.expect(result$).toBeObservable(result);
  //   }));
  // });

  // describe('on multiplyAllValuesByTwo', () => {
  //   it('should multiply all the values in the observable by two', () => {
  //     dataService.getStreamOfNumbers.mockReturnValue(Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

  //     const result$ = service.multiplyAllValuesByTwo();

  //     let expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  //     result$.subscribe(val => {
  //       expect(val).toBe(expectedResult[0]);
  //       expectedResult = expectedResult.splice(1);
  //     });
  //     // To make sure we exhausted all the values in our expected result
  //     expect(expectedResult.length).toBe(0);
  //   });

  //   it('should multiply all the values in the observable by two with marble testing', marbles((m) => {
  //     const numbers$ = m.cold('0---1--2--345--6--7--8--9|');
  //     const result =          'a---b--c--def--g--h--i--j|';
  //     dataService.getStreamOfNumbers.mockReturnValue(numbers$);

  //     const result$ = service.multiplyAllValuesByTwo();

  //     m.expect(result$).toBeObservable(result, {
  //       a: 0,
  //       b: 2,
  //       c: 4,
  //       d: 6,
  //       e: 8,
  //       f: 10,
  //       g: 12,
  //       h: 14,
  //       i: 16,
  //       j: 18,
  //     });
  //   }));
  // });

  // describe('on filterOutValuesOfArray', () => {
  //   it('should filter out all the odd values in the observable', () => {
  //     dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

  //     const result$ = service.filterOutValuesOfArray();

  //     result$.subscribe(array => array.forEach((val) => expect(val % 2).toBe(0)));
  //   });

  //   it('should filter out all the odd values in the observable with marble testing', marbles((m) => {
  //     const numbers$ = m.cold('a', {a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]});
  //     const result =          'a';

  //     dataService.getStreamOfArrayWithNumbers.mockReturnValue(numbers$);

  //     const result$ = service.filterOutValuesOfArray();

  //     m.expect(result$).toBeObservable(result, {a: [0, 2, 4, 6, 8]});
  //   }));
  // });

  // describe('on multiplyAllValuesByTwoOfArray', () => {
  //   it('should multiply all the values in the observable by two', () => {
  //     dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

  //     const result$ = service.multiplyAllValuesByTwoOfArray();

  //     const expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  //     result$.subscribe(result => {
  //       expect(result).toEqual(expectedResult);
  //     });
  //   });

  //   it('should multiply all the values in the observable by two with marble testing', marbles((m) => {
  //     dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

  //     const result$ = service.multiplyAllValuesByTwoOfArray();

  //     const expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  //     m.expect(result$).toBeObservable('(a|)', {a: expectedResult});
  //   }));
  // });
});
