const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

// Селекторы:
const getX = (point) => point.x;
const getY = (point) => point.y;

// getQuadrant() возвращает квадрант в котором находится точка.
const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

// makeRectangle() (конструктор) – создает прямоугольник.
// Принимает параметры: левую-верхнюю точку, ширину и высоту.
const makeRectangle = (point, width, height) => ({
  point,
  width,
  height,
});

// Cелекторы:
const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

// containsOrigin() проверяет, принадлежит ли центр координат прямоугольнику
// (не лежит на границе прямоугольника, а находится внутри).
const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );
  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

const p = makeDecartPoint(0, 1);
const z = makeDecartPoint(-4, 3);

const rectangle = makeRectangle(p, 4, 5);
const rectangle2 = makeRectangle(z, 5, 4);

containsOrigin(rectangle); // false
containsOrigin(rectangle2); // true
