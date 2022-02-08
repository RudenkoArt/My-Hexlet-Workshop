import fill from '../src/JS_Automated_Testing_L10_Exercise';

// Тесты для функции fill(coll, value, start, end), которая заполняет элементы массива
// переданным значением, начиная со старта и заканчивая (но не включая) конечной позицией.
// Функция меняет исходный массив.

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('testing function fill()', () => {
  const actual1 = fill(array, '*', 1, 3);
  expect(actual1).toEqual([1, '*', '*', 4]);

  const actual2 = fill(array, '*');
  expect(actual2).toEqual(['*', '*', '*', '*']);

  const actual3 = fill(array, '*', 4);
  expect(actual3).toEqual([1, 2, 3, 4]);

  const actual4 = fill(array, '*', 0, 10);
  expect(actual4).toEqual(['*', '*', '*', '*']);
});
