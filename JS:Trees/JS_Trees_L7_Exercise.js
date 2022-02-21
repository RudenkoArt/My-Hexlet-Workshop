import _ from 'lodash';

import {
  mkdir,
  mkfile,
  isFile,
  getName,
  getMeta,
  getChildren,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [mkfile('nginx.conf', { size: 800 })]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

// du() принимает на вход директорию и возвращает список вложенных узлов (директорий и файлов)
// в указанную директорию на один уровень, а так же место, которое они занимают.

// Размер файла задается в метаданных. Размер директории складывается из сумм
// всех размеров файлов, находящихся внутри во всех поддиректориях.

const calculateFilesSize = (node) => {
  const meta = getMeta(node);
  if (isFile(node)) {
    return meta.size;
  }
  const children = getChildren(node);
  const sizes = children.map(calculateFilesSize);
  return _.sum(sizes);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [
    getName(child),
    calculateFilesSize(child),
  ]);
  // Результат отсортирован по размеру в обратном порядке.
  // То есть сверху самые тяжёлые, внизу самые лёгкие.
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

du(tree);

// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
