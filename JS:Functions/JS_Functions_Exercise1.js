// Функция принимает на вход массив и возвращает новый, состоящий из элементов,
// у которых такая же чётность, как и у первого элемента входного массива.

const sameParity = (arr) => arr.filter((item) => Math.abs(arr[0] % 2) === Math.abs(item % 2));

sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // []
