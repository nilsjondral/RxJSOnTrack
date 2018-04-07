import {ExerciseOneService} from './exercise-one.service';
import {Observable} from 'rxjs/Observable';
import {marbles} from 'rxjs-marbles';

describe('service: ExerciseOneService', () => {
  let service: ExerciseOneService;
  let dataService;

  beforeEach(() => {
    dataService = {
      getStreamOfNumbers: jest.fn(),
      getStreamOfArrayWithNumbers: jest.fn(),
      getStreamOfLetters: jest.fn(),
    };

    service = new ExerciseOneService(dataService);
  });

  describe('on filterOutValues', () => {
    it('should filter out all the odd values in the observable', () => {
      dataService.getStreamOfNumbers.mockReturnValue(Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

      const result$ = service.filterOutValues();

      result$.subscribe(val => expect(val % 2).toBe(0));
    });

    it('should filter out all the odd values in the observable with marble testing', marbles((m) => {
      const numbers$ = m.cold('0---1--2--345--6--7--8--9|');
      const result =          '0------2---4---6-----8---|';

      dataService.getStreamOfNumbers.mockReturnValue(numbers$);

      const result$ = service.filterOutValues();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on multiplyAllValuesByTwo', () => {
    it('should multiply all the values in the observable by two', () => {
      dataService.getStreamOfNumbers.mockReturnValue(Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

      const result$ = service.multiplyAllValuesByTwo();

      let expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      // To make sure we exhausted all the values in our expected result
      expect(expectedResult.length).toBe(0);
    });

    it('should multiply all the values in the observable by two with marble testing', marbles((m) => {
      const numbers$ = m.cold('0---1--2--345--6--7--8--9|');
      const result =          'a---b--c--def--g--h--i--j|';
      dataService.getStreamOfNumbers.mockReturnValue(numbers$);

      const result$ = service.multiplyAllValuesByTwo();

      m.expect(result$).toBeObservable(result, {
        a: 0,
        b: 2,
        c: 4,
        d: 6,
        e: 8,
        f: 10,
        g: 12,
        h: 14,
        i: 16,
        j: 18,
      });
    }));
  });

  describe('on filterOutValuesOfArray', () => {
    it('should filter out all the odd values in the observable', () => {
      dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

      const result$ = service.filterOutValuesOfArray();

      result$.subscribe(array => array.forEach((val) => expect(val % 2).toBe(0)));
    });

    it('should filter out all the odd values in the observable with marble testing', marbles((m) => {
      const numbers$ = m.cold('a', {a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]});
      const result =          'a';

      dataService.getStreamOfArrayWithNumbers.mockReturnValue(numbers$);

      const result$ = service.filterOutValuesOfArray();

      m.expect(result$).toBeObservable(result, {a: [0, 2, 4, 6, 8]});
    }));
  });

  describe('on multiplyAllValuesByTwoOfArray', () => {
    it('should multiply all the values in the observable by two', () => {
      dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

      const result$ = service.multiplyAllValuesByTwoOfArray();

      const expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
      result$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });

    it('should multiply all the values in the observable by two with marble testing', marbles((m) => {
      dataService.getStreamOfArrayWithNumbers.mockReturnValue(Observable.of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

      const result$ = service.multiplyAllValuesByTwoOfArray();

      const expectedResult = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
      m.expect(result$).toBeObservable('(a|)', {a: expectedResult});
    }));
  });

  describe('on countAllTheValues', () => {
    it('should count the numbers and emit temporary events', () => {
      dataService.getStreamOfNumbers.mockReturnValue(Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

      const result$ = service.countAllTheValues();

      let expectedResult = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should count the numbers and emit temporary events with marble testing', marbles((m) => {
      const numbers$ = m.cold('--a--b--c--d--e--f--g--h--i--j|', {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
      });
      const result =         '--a--b--c--d--e--f--g--h--i--j|';

      dataService.getStreamOfNumbers.mockReturnValue(numbers$);

      const result$ = service.countAllTheValues();

      m.expect(result$).toBeObservable(result, {
        a: 0,
        b: 1,
        c: 3,
        d: 6,
        e: 10,
        f: 15,
        g: 21,
        h: 28,
        i: 36,
        j: 45,
      });
    }));
  });

  describe('on filterOutDuplicateValues', () => {
    it('should filter out all duplicate values', () => {
      dataService.getStreamOfLetters.mockReturnValue(Observable.of('a', 'b', 'c', 'a', 'a', 'c', 'd'));

      const result$ = service.filterOutDuplicateValues();

      let expectedResult = ['a', 'b', 'c', 'd'];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should filter out all duplicate values with marble testing', marbles((m) => {
      const letters$ = m.cold('--a---b-c-a---a-c---d');
      const result =          '--a---b-c-----------d';

      dataService.getStreamOfLetters.mockReturnValue(letters$);

      const result$ = service.filterOutDuplicateValues();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on filterOutImmediateDuplicateValues', () => {
    it('should filter out immediate duplicate values', () => {
      dataService.getStreamOfLetters.mockReturnValue(Observable.of('a', 'b', 'c', 'a', 'a', 'c', 'd'));

      const result$ = service.filterOutImmediateDuplicateValues();

      let expectedResult = ['a', 'b', 'c', 'a', 'c', 'd'];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should filter immediate duplicate values with marble testing', marbles((m) => {
      const letters$ = m.cold('--a---b-c-a---a-c---d');
      const result =          '--a---b-c-a-----c---d';

      dataService.getStreamOfLetters.mockReturnValue(letters$);

      const result$ = service.filterOutImmediateDuplicateValues();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on onlyTakeTheFirstFiveEvents', () => {
    it('should only let 5 events pass and then unsubscribe from the source observable', () => {
      dataService.getStreamOfLetters.mockReturnValue(Observable.of('a', 'b', 'c', 'd', 'e', 'f', 'g'));

      const result$ = service.onlyTakeTheFirst5Events();

      let expectedResult = ['a', 'b', 'c', 'd', 'e'];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should only let 5 events pass and then unsubscribe from the source observable with marble testing', marbles((m) => {
      const letters$ = m.cold('---a---b-----c--d--e--f---g-');
      const result =          '---a---b-----c--d--(e|)';

      dataService.getStreamOfLetters.mockReturnValue(letters$);

      const result$ = service.onlyTakeTheFirst5Events();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on makeSureTheStreamBeginsWithTwelve', () => {
    it('should make sure the stream starts with the value x', () => {
      dataService.getStreamOfLetters.mockReturnValue(Observable.of('a', 'b', 'c', 'a', 'a', 'c', 'd'));

      const result$ = service.makeSureTheStreamBeginsWithX();

      let expectedResult = ['x', 'a', 'b', 'c', 'a', 'a', 'c', 'd'];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should make sure the stream starts with the value x with marble testing', marbles((m) => {
      const letters$ = m.cold('---abc---d-----e--f--g--h---ij-|');
      const result =          'x--abc---d-----e--f--g--h---ij-|';

      dataService.getStreamOfLetters.mockReturnValue(letters$);

      const result$ = service.makeSureTheStreamBeginsWithX();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on ignoreTheFirstFiveValues', () => {
    it('should make sure the stream starts with the value x', () => {
      dataService.getStreamOfLetters.mockReturnValue(Observable.of('a', 'b', 'c', 'a', 'a', 'c', 'd'));

      const result$ = service.ignoreTheFirstFiveValues();

      let expectedResult = ['c', 'd'];
      result$.subscribe(val => {
        expect(val).toBe(expectedResult[0]);
        expectedResult = expectedResult.splice(1);
      });
      expect(expectedResult.length).toBe(0);
    });

    it('should make sure the stream starts with the value x with marble testing', marbles((m) => {
      const letters$ = m.cold('---abc---d-----e--f--g--h---ij-|');
      const result =          '------------------f--g--h---ij-|';

      dataService.getStreamOfLetters.mockReturnValue(letters$);

      const result$ = service.ignoreTheFirstFiveValues();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on debounceTheValues', () => {
    it('should debounce the values wth 20 ms with marble testing', marbles((m) => {
      const letters$ = m.cold('---abc---d-----e--f--g--h---ij-|');
      const result =          '-------c---d-----e--f--g--h----(j|)';

      dataService.getStreamOfLetters.mockReturnValue(letters$);
      service.scheduler = m.scheduler;

      const result$ = service.debounceTheValues();

      m.expect(result$).toBeObservable(result);
    }));
  });

  describe('on autoComplete', () => {
    it('should take the stream and debounce it, filter out immediate duplicates and filter out to short ones', marbles((m) => {
      const values = {
        a: 'i',
        b: 'ip',
        c: 'iph',
        d: 'ipho',
        e: 'ipho',
        f: 'iph',
        g: 'ip',
        h: 'i',
      };
      const searchTerm$ = m.cold('---a-b---c--------d-e---f---g---h', values);
      const result =             '-------b---c----------e---f---g----';

      service.scheduler = m.scheduler;

      const result$ = service.autoComplete(searchTerm$);

      m.expect(result$).toBeObservable(result, values);
    }));
  });
});
