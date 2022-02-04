// Функция принимает на вход массив чисел и искомое число.
// Задача функции — найти в массиве ближайшее число к искомому
// и вернуть его индекс в массиве.

// Если в массиве содержится несколько чисел, одновременно являющихся
// ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел.

const findIndexOfNearest = (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }
  const diffs = numbers
    .reduce((prev, curr) => (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev));

  return numbers.indexOf(diffs);
};

findIndexOfNearest([], 2); // null
findIndexOfNearest([15, 10, 3, 4], 0); // 2
findIndexOfNearest([7, 5, 3, 2], 4); // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
