import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';
import { Scheduler } from 'rxjs/Scheduler';

@Injectable()
export class ExerciseThreeService {
  scheduler: Scheduler;

  constructor(private dataService: DataService) {
  }

  // TODO: finish the auto complete so that we actually perform a backend call every time the searchTerm changes.
  // TODO: Avoid having unnecessary backend calls
  // TODO: (use the dataService.getBackendData for the backend call)
  autoComplete(searchTerm$: Observable<string>) {
    return searchTerm$;
  }

  // TODO: Every time the user clicks OR swipes down on his mobile screen the data needs to be reloaded.
  // TODO: Avoid having unnecessary backend calls
  // TODO: Make sure that a backend call is performed on startup as well
  // TODO: (use the dataService.getBackendData without parameters for the backend call)
  refreshTheData(click$: Observable<string>, swipe$: Observable<string>) {
    return click$;
  }

  // TODO: Every time the page or searchTerm changes a backend call must be performed.
  // TODO: Avoid multiple backend calls
  // TODO: (use the dataService.getBackendData, pass the searchTerm and page as parameters)
  refreshTheData2(page$: Observable<number>, searchTerm$: Observable<string>) {
    return searchTerm$;
  }

  // TODO: For every event in the pictures$, an image should be uploaded
  // TODO: (use the dataService.uploadPicture for the backend call)
  uploadPictures(pictures$: Observable<string>) {
    return pictures$;
  }
}
