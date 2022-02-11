// makeDecartPoint() присваивает точке значения x и y
const makeDecartPoint = (x, y) => ({ x, y });

// getX() извлекает x
const getX = (point) => point.x;

// getY() извлекает y
const getY = (point) => point.y;

// makeSegment() принимает на вход две точки и возвращает отрезок
const makeSegment = (point1, point2) => {
  const segment = { firstPoint: point1, secondPoint: point2 };
  return segment;
};

const beginPoint = makeDecartPoint(3, 2);

const endPoint = makeDecartPoint(0, 0);

const segment = makeSegment(beginPoint, endPoint);

// getBeginPoint() принимает на вход отрезок и возвращает точку начала отрезка
const getBeginPoint = (segment) => segment.firstPoint;

// getEndPoint() принимает на вход отрезок и возвращает точку конца отрезка
const getEndPoint = (segment) => segment.secondPoint;

// getMidpointOfSegment() принимает на вход отрезок и
// возвращает точку находящуюся на середине отрезка
const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
