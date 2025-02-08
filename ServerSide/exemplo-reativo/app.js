const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');
const numbers = [1, 2, 3, 4, 5];

const observable = new Observable((observer) => {
  numbers.forEach((num) => {
    observer.next(num);
  });
  observer.complete();
});

const doubledObservable = observable.pipe(
  map((value) => value * 2)
);

doubledObservable.subscribe((value) => {
  console.log(value); // Imprime 2, 4, 6, 8, 10
});
