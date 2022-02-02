import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// Тесты для функции take(items, n), которая
// возвращает первые n элементов из массива.
// По умолчанию n равен 1.

assert.deepStrictEqual(take(['one', 'two'], 1), ['one']);
assert.deepStrictEqual(take(['one', 2, 3], 2), ['one', 2]);
assert.deepStrictEqual(take(['Mike', 'Julia', 'Tom']), ['Mike']);
assert.deepStrictEqual(take(['USA', 2, 3.14], 9), ['USA', 2, 3.14]);
assert.deepStrictEqual(take([], 2), []);

// Примеры правильной работы функции:
// take([], 2); // []
// take([1, 2, 3]); // [1]
// take([1, 2, 3], 2); // [1, 2]
// take([4, 3], 9); // [4, 3]
