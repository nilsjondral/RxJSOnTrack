import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { Injectable } from '@angular/core';
import {
  filter,
  scan,
  distinct,
  distinctUntilChanged,
  take,
  startWith,
  skip,
  debounceTime
} from 'rxjs/operators';

@Injectable()
export class ExerciseTwoService {
  scheduler: Scheduler;

  constructor(private dataService: DataService) {
  }

  // TODO: Calculate the total of all the number events and emit temporary results
  countAllTheValues(): Observable<number> {
    const numbers$: Observable<number> = this.dataService.getStreamOfNumbers();

    return numbers$.pipe(scan((acc, curr) => acc + curr, 0));
  }

  // TODO: Filter out all the duplicate events
  filterOutDuplicateValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(distinct());
  }

  // TODO: filter out all the immediate duplicate events
  filterOutImmediateDuplicateValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(distinctUntilChanged());
  }

  // TODO: only allow the first 5 events and then stop listening
  onlyTakeTheFirst5Events(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(take(5));
  }

  // TODO: Make sure the stream starts with the string event 'x'
  makeSureTheStreamBeginsWithX(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(startWith('x'));
  }

  // TODO: Ignore the first five events of the observable
  ignoreTheFirstFiveValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(skip(5));
  }

  // TODO: Debounce the values passed with 20ms
  // TODO: pass the scheduler (this.scheduler) as second argument to the operator
  // TODO: this is needed to be able to properly test it
  debounceTheValues(): Observable<string> {
    const letters$: Observable<string> = this.dataService.getStreamOfLetters();

    return letters$.pipe(debounceTime(20, this.scheduler));
  }

  // TODO: debounce the values with 20ms,
  // TODO: pass the scheduler (this.scheduler) as second argument to the operator
  // TODO: remove immediate duplicates
  // TODO: return the newly created observable
  autoComplete(searchTerm$: Observable<string>) {
    return searchTerm$.pipe(
      debounceTime(20, this.scheduler),
      distinctUntilChanged());
  }

  // TODO: debounce the values with 20ms,
  // TODO: pass the scheduler (this.scheduler) as second argument to the operator
  // TODO: remove immediate duplicates
  // TODO: filter out the strings with a length smaller than two
  // TODO: return the newly created observable
  // TODO: This is a typical stream you could for an auto complete, hence the method name
  autoCompleteWithFilter(searchTerm$: Observable<string>) {
    return searchTerm$.pipe(
      debounceTime(20, this.scheduler),
      distinctUntilChanged(),
      filter(x => x.length > 1));
  }
}
