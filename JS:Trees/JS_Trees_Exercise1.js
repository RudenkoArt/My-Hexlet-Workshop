// convert() принимает на вход массив определённой структуры
// и возвращает объект, полученный из этого массива.

const convert = (arr) => arr.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});

convert([]); // {}

convert([['key', 'value']]); // { key: 'value' }

convert([
  ['key', 'value'],
  ['key2', 'value2'],
]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2'],
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' }
