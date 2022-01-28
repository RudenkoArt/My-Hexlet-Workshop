const newUsers = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [{ name: 'Taywin', gender: 'male' }],
  },
];

// Функция getGirlFriends() принимает на вход список пользователей и
// возвращает плоский список подруг всех пользователей

const getGirlFriends = (users) =>
  users
    .map(({ friends }) => friends)
    // при помощи функции высшего порядка map() мы возвращаем всех друзей
    .flat()
    // выравниваем список поднимая все элементы на один уровень с помощью .flat()
    .filter(({ gender }) => gender === 'female');
    // при помощи метода filter() находим всех друзей женского пола

getGirlFriends(newUsers);
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
