import assert from 'power-assert';
import getFunction from '../functions.js';

const indexOf = getFunction();

// Тесты для функции indexOf(items, value, [fromIndex=0]),
// которая возвращает индекс первого вхождения переданного элемента в массив,
// начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю.

assert(indexOf(['one', 'two', true], 'one') === 0);
assert(indexOf([5, 4, 3, 2, 1, 'five', 3, 5, 4], 3) === 2);
assert(indexOf([1, 4, 3, 2, false, 5, 3, 'Artur', 3], 3, 3) === 6);
assert(indexOf([], 4) === -1);

// Примеры правильной работы функции:
// indexOf([1, 2, 1, 2], 2); // 1
// indexOf([1, 2, 1, 2], 2, 2); // 3
// indexOf([2, 'one', 'cat', false], 8); // -1
