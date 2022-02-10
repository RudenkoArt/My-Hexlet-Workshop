// Функция getMidpoint() находит точку посередине между двумя указанными точками.

const getMidpoint = (point1, point2) => {
  const midPoint = {};
  midPoint.x = (point1.x + point2.x) / 2;
  midPoint.y = (point1.y + point2.y) / 2;

  return midPoint;
};

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);

console.log(point3); // => { x: 2, y: 2 };

const point4 = { x: -1, y: 10 };
const point5 = { x: 0, y: -3 };
const point6 = getMidpoint(point4, point5);

console.log(point6); // => { x: -0.5, y: 3.5 };
