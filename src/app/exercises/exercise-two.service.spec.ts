import {ExerciseTwoService} from './exercise-two.service';
import {DataService} from '../services/data.service';
import {marbles} from 'rxjs-marbles';
import {Observable} from 'rxjs/Observable';

describe('service ExerciseTwoService', () => {
  let service: ExerciseTwoService;
  let dataService;

  beforeEach(() => {
    dataService = {
      getBackendData: jest.fn(),
      uploadPicture: jest.fn(),
    };

    service = new ExerciseTwoService(dataService);
  });

  describe('on autoComplete', () => {
    it('should debounce, filter out duplicates, filter out short values and perform a backend cal for the latest stream', marbles((m) => {
      const values = {
        a: 'i',
        b: 'ip',
        c: 'iph',
        d: 'ipho',
        e: 'ipho',
        f: 'iph',
        g: 'ip',
        h: 'i',
        r: ['this', 'is', 'the', 'backend', 'result'],
      };
      const searchTerm$ = m.cold('---a-b---c--------d-e---f---g---h', values);
      const result =             '----------------r------------------r';

      dataService.getBackendData.mockReturnValue(m.cold('-----r', values));
      service.scheduler = m.scheduler;

      const result$ = service.autoComplete(searchTerm$);

      m.expect(result$).toBeObservable(result, values);
    }));
  });

  describe('on refreshTheData', () => {
    it('should perform a backend call on every swipe or click without having unnecessary calls', marbles((m) => {
      const click$ =  m.cold('------c---------------c-------------c');
      const swipes$ = m.cold('-------------s----------s------------');
      const result =         '----r-----r------r----------r-----------r';

      const values = {
        r: ['this', 'is', 'the', 'backend', 'result'],
      };
      dataService.getBackendData.mockReturnValue(m.cold('----r', values));

      const result$ = service.refreshTheData(click$, swipes$);

      m.expect(result$).toBeObservable(result, values);
    }));
  });

  describe('on refreshTheData2', () => {
    it('should perform a backend call on every change of the page$ or searchTerm$ and to start without unnecessary calls', marbles((m) => {
      const page$ =       m.cold('-------1--------------2-------');
      const searchTerm$ = m.cold('---------------a-----------b--');
      const result =             '-------------------r------r----r';

      const values = {
        r: ['this', 'is', 'the', 'backend', 'result'],
      };
      dataService.getBackendData.mockReturnValue(m.cold('----r', values));

      const result$ = service.refreshTheData2(page$, searchTerm$);

      m.expect(result$).toBeObservable(result, values);
    }));
  });

  describe('on uploadPictures', () => {
    it('should upload every picture using the dataService', marbles((m) => {
      const values = {
        a: 'img1.jpg',
        b: 'img2.jpg',
        c: 'img3.jpg',
        d: 'img4.jpg',
        e: 'img5.jpg',
        f: 'img6.jpg',
        g: 'success',
      };
      const pictures$ = m.cold('----a-----b-----c---d---e-f', values);
      const result =           '----g-----g-----g---g---g-g';
      dataService.uploadPicture.mockReturnValue(Observable.of('success'));

      const result$ = service.uploadPictures(pictures$);

      m.expect(result$).toBeObservable(result, values);
    }));
  });
});
