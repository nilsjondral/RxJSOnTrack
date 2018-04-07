import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { marbles } from 'rxjs-marbles';
import { map } from 'rxjs/operators/map';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should support marble tests', marbles((m) => {
    const values = { a: 1, b: 2, c: 3, d: 4 };

    const source =  m.hot('--^-a-b-c-|', values);
    const subs =            '^-------!';
    const expected = m.cold('--b-c-d-|', values);

    const destination = source.pipe(map((value) => value + 1));
    m.expect(destination).toBeObservable(expected);
    m.expect(source).toHaveSubscriptions(subs);
  }));
});
