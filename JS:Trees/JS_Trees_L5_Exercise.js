import _ from 'lodash';

import {
  mkdir,
  mkfile,
  isFile,
  getChildren,
  getName,
  getMeta,
} from '@hexlet/immutable-fs-trees';

const fileTree = mkdir('/', [
  mkdir('eTc', [mkdir('NgiNx'), mkdir('CONSUL', [mkfile('config.json')])]),
  mkfile('hOsts'),
]);

// downcaseFileNames() принимает на вход директорию (объект-дерево),
// приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру.
// Результат в виде обработанной директории возвращается наружу.

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }
  const children = getChildren(tree);
  const newChildren = children.map(downcaseFileNames);
  return mkdir(name, newChildren, newMeta);
};

downcaseFileNames(fileTree);

// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }
