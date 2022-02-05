import getFunction from '../functions.js';

const without = getFunction();

// Тесты для функции without(coll, [values]),
// которая принимает первым параметром массив и возвращает его копию,
// из которой исключены значения, переданные вторым и последующими параметрами.

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 1, 2, 3)).toEqual([]);
  expect(without([], 5, 7)).toEqual([]);
});

// В этот раз мы используем среду тестирования Jest

// Примеры правильной работы функции:
// _.without([2, 1, 2, 3], 1, 2); // [3]
// _.without([], 1, 2); // []
