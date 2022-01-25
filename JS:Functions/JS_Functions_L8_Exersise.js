import _ from 'lodash';

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

// Функция takeOldest() принимает на вход список пользователей и возвращает самых взрослых.
// Количество возвращаемых пользователей задается
// вторым параметром, который по умолчанию равен единице.
const takeOldest = (users, defaultValue = 1) => {
  const sortedUsers = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  // записываем в константу sortedUsers отсортированный массив
  // для сортировки используем функцию _.sortBy() библиотеки lodash
  // первым параметром передаём массив объектов с именами и датами рождения
  // вторым для сортировки передаём функцию которая разбирает строковую дату методом Date.parse()
  return sortedUsers.slice(0, defaultValue);
  // возвращаем по умолчанию одного пользователя с наименьшим количеством миллисекунд,
  // прошедших с 1 января 1970 года 00:00:00 по UTC. - а значит, и самого взрослого.
};

takeOldest(users);
//[ { name: 'Rob', birthday: 'Jan 11, 1975' } ]

takeOldest(users, 2);
// [
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Tirion', birthday: 'Nov 19, 1988' }
//   ]
takeOldest(users, 3);

// [
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Tirion', birthday: 'Nov 19, 1988' },
//     { name: 'Tisha', birthday: 'Feb 27, 1992' }
//   ]
