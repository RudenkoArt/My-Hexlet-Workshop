import {
  mkdir,
  mkfile,
  isFile,
  getName,
  getChildren,
} from '@hexlet/immutable-fs-trees';

import path from 'path';

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

// findFilesByName() принимает на вход файловое дерево и подстроку,
// а возвращает список файлов, имена которых содержат эту подстроку.
// Функция возвращает полные пути до файлов.

const findFilesByName = (fileTree, str) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(str) ? newAncestry : [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };
  return iter(fileTree, '');
};

findFilesByName(tree, 'co');
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
