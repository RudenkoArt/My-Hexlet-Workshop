import _ from 'lodash';
import getFunction from '../functions.js';

const set = getFunction();

// Тесты для функции set(obj, path, value) возвращающей объект,
// в котором она изменяет (или добавляет) значение по указанному пути.
// Функция мутирует объект.

let object;
let objectCopy;

beforeEach(() => {
  object = { a: [{ b: { c: 3 } }] };
  objectCopy = _.cloneDeep(object);
});

test('plain set', () => {
  set(object, 'a', 'some value');
  objectCopy.a = 'some value';
  expect(object).toEqual(objectCopy);
});

test('nested set', () => {
  set(object, 'a[0].b.c', false);
  objectCopy.a[0].b.c = false;
  expect(object).toEqual(objectCopy);
});

test('set new property', () => {
  set(object, 'a[0].b.d', true);
  objectCopy.a[0].b.d = true;
  expect(object).toEqual(objectCopy);
});

// Примеры правильной работы функции:
// set(object, 'a[0].b.c', 4);
// console.log(object.a[0].b.c); // => 4

// set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object.x[0].y.z); // => 5
