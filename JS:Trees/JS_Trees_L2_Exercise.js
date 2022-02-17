// removeFirstLevel() принимает на вход дерево, и возвращает новое,
// элементами которого являются дети вложенных узлов
const removeFirstLevel = (tree) => tree.filter((node) => Array.isArray(node)).flat();

// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
removeFirstLevel(tree1); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2); // [3, 5, [4, 3], 2]

const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
removeFirstLevel(tree3); // [1, [3, 2], 3, 5]
