import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Scheduler';
import {Injectable} from '@angular/core';

@Injectable()
export class ExerciseOneService {
  scheduler: Scheduler;

  constructor(private dataService: DataService) {
  }

  // TODO: Filter out the odd numbers events
  filterOutValues() {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$.filter(x => x % 2 === 0);
  }

  // TODO: Multiply all the number events by two
  multiplyAllValuesByTwo() {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$.map(x => x * 2);
  }

  // TODO: Every event is an array of numbers. Modify the event so the array only contains even numbers.
  filterOutValuesOfArray(): Observable<Array<number>> {
    const array$: Observable<Array<number>> = this.dataService.getStreamOfArrayWithNumbers();

    return array$.map(arr => arr.filter(x => x % 2 === 0));
  }

  // TODO: Every event is an array of numbers. Modify the event so every number in the array is multiplied by two.
  multiplyAllValuesByTwoOfArray(): Observable<Array<number>> {
    const array$: Observable<Array<number>> = this.dataService.getStreamOfArrayWithNumbers();

    return array$.map(arr => arr.map(x => x * 2));
  }

  // TODO: Calculate the total of all the number events and emit temporary results
  countAllTheValues(): Observable<number> {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$.scan((acc, curr) => acc + curr, 0);
  }

  // TODO: Filter out all the duplicate events
  filterOutDuplicateValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.distinct();
  }

  // TODO: filter out all the immediate duplicate events
  filterOutImmediateDuplicateValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.distinctUntilChanged();
  }

  // TODO: only allow the first 5 events and then stop listening
  onlyTakeTheFirst5Events(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.take(5);
  }

  // TODO: Make sure the stream starts with the string event 'x'
  makeSureTheStreamBeginsWithX(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.startWith('x');
  }

  // TODO: Ignore the first five events of the observable
  ignoreTheFirstFiveValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.skip(5);
  }

  // TODO: Debounce the values passed with 20ms
  // TODO: pass the scheduler (this.scheduler) as second argument to the operator
  // TODO: this is needed to be able to properly test it
  debounceTheValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.debounceTime(20, this.scheduler);
  }

  // TODO: debounce the values with 20ms,
  // TODO: pass the scheduler (this.scheduler) as second argument to the operator
  // TODO: remove immediate duplicates
  // TODO: filter out the strings with a length smaller than two
  // TODO: return the newly created observable
  // TODO: This is a typical stream you could for an auto complete, hence the method name
  autoComplete(searchTerm$: Observable<string>) {
    return searchTerm$
      .debounceTime(20, this.scheduler)
      .distinctUntilChanged()
      .filter(x => x.length > 1);
  }
}
