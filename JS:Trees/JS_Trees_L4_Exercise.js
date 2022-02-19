import _ from 'lodash';

import {
  mkdir,
  mkfile,
  isFile,
  getChildren,
  getName,
  getMeta,
} from '@hexlet/immutable-fs-trees';

const fileTree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations'),
]);

// compressImages() принимает на вход директорию,
// находит внутри нее картинки и "сжимает" их.
// Под сжиманием понимается уменьшение свойства size в метаданных в два раза.
// Картинками считаются все файлы заканчивающиеся на .jpg.

const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((node) => {
    const name = getName(node);
    const newMeta = _.cloneDeep(getMeta(node));
    newMeta.size /= 2;
    if (isFile(node) && name.endsWith('.jpg')) {
      return mkfile(name, newMeta);
    }
    return node;
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  return mkdir(getName(tree), newChildren, newMeta);
};

const newTree = compressImages(fileTree);
// То же самое, что и fileTree, но во всех картинках размер уменьшен в два раза.
