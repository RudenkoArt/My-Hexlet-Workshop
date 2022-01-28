const users = [
  {
    name: 'Tirion',
    children: [{ name: 'Mira', birthday: '1983-03-23' }],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [{ name: 'Tisha', birthday: '2012-11-03' }],
  },
];

// Функция принимает на вход список пользователей и
// возвращает плоский список их детей. Дети каждого пользователя
// хранятся в виде массива в ключе children.

const getChildren = (users) => users.map((user) => user.children).flat();
// при помощи функции высшего порядка map() мы перебираем
// элементы переданной коллекции и для каждого элемента вызываем внутренюю функцию
// результат которой записывается в новый массив и возвращается наружу
// выравниваем список поднимая все элементы на один уровень с помощью .flat()

getChildren(users);
// [
//     { name: 'Mira', birthday: '1983-03-23' },
//     { name: 'Aria', birthday: '2012-11-03' },
//     { name: 'Keit', birthday: '1933-05-14' },
//     { name: 'Tisha', birthday: '2012-11-03' }
//   ]
