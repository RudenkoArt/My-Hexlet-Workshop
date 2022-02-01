// Тесты для функции, которая извлекает значение
// из объекта при условии, что ключ существует.
// В ином случае возвращается defaultValue.

if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('Something went wrong!');
}

if (get({ key: 'value' }, 'key', 'defaultValue') !== 'value') {
  throw new Error('Something went wrong!');
}

if (get({}, 'value', 'defaultValue') !== 'defaultValue') {
  throw new Error('Something went wrong!');
}

// Примеры правильной работы функции:
// get({ hello: 'world' }, 'hello'); // world
// get({ hello: 'world' }, 'hello', 'kitty'); // 'world'
// get({}, 'hello', 'kitty'); // 'kitty'
