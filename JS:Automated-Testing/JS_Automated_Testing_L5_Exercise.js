import getFunction from '../functions.js';

const gt = getFunction();

// Тесты для функции gt(value, other),
// которая возвращает true в том случае,
// если value > other, и false в иных случаях.

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBeFalsy();
  expect(gt(1, 3)).toBeFalsy();
  expect(gt()).toBeFalsy();
});

// Примеры правильной работы функции:
// gt(3, 1); // true
// gt(3, 3); // false
// gt(1, 3); // false
