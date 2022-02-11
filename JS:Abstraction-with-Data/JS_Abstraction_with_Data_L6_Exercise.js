// makePoint() принимает на вход координаты и возвращает точку в полярной системе координат
const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

const x = 4;
const y = 8;

// point хранит в себе данные в полярной системе координат
const point = makePoint(x, y);

// getAngle() извлекает угол
const getAngle = (point) => point.angle;

// getRadius() извлекает радиус
const getRadius = (point) => point.radius;

// getX() и getY() преобразует из полярной системы в декартову
const getX = (point) => {
  const x = Math.round(getRadius(point) * Math.cos(getAngle(point)));
  return x;
};

const getY = (point) => {
  const y = Math.round(getRadius(point) * Math.sin(getAngle(point)));
  return y;
};

getX(point); // 4
getY(point); // 8
