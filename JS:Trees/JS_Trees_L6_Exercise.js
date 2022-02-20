import _ from 'lodash';

import {
  mkdir,
  mkfile,
  isFile,
  getChildren,
  getName,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [mkfile('.nginx.conf', { size: 800 })]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

// getHiddenFilesCount() считает количество скрытых файлов в директории и всех поддиректориях.
// Скрытым файлом в Linux системах считается файл, название которого начинается с точки.

// В реализации используем рекурсивный процесс,
// чтобы добраться до самого дна дерева.

const getHiddenFilesCount = (node) => {
  // Извлекаем имя и помещаем его в name.
  const name = getName(node);
  // Если узел - файл, проверяем на наличие точки в начале
  // имени и возвращаем 1, и 0 если точки нет.
  if (isFile(node)) {
    return name.startsWith('.') ? 1 : 0;
  }
  // Если узел — директория, получаем его детей.
  const children = getChildren(node);
  // Считаем количество скрытых файлов вызывая рекурсивно нашу функцию getHiddenFilesCount().
  const hiddenFilesCounts = children.map(getHiddenFilesCount);
  // Возвращаем сумму скрытых файлов на выходе.
  return _.sum(hiddenFilesCounts);
};

getHiddenFilesCount(tree); // 3
