import _ from 'lodash';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

// Функция группирует объекты по заданному свойству,
// принимая аргументами массив объектов и название свойства для группировки.
// На выходе возвращает объект, где ключ - это значение по заданному свойству,
// а значение - массив с данными, подходящими для группы.

const groupBy = (objects, key) => {
  const callback = (acc, user) => {
    // предварительно подготавливаем функцию-обработчик callback()
    if (!_.has(acc, user[key])) {
      // проверяем на наличие нужного нам ключа
      acc[user[key]] = [];
      // создаём при его отсутствии
    }
    acc[user[key]].push(user);
    // заносим информацию о пользователе по ключу
    return acc; // возвращаем аккумулятор
  };

  return objects.reduce(callback, {});
  // используем метод reduce() который принимает на вход
  // заранее созданную функцию-обработчик callback()
  // и пустой объект в качестве аккумулятора
};

groupBy([], ''); // {}

groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
