// Функция calculateDistance() находит расстояние между двумя точками на плоскости

const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
};

calculateDistance([0, 0], [3, 4]); // 5
calculateDistance([-1, -4], [-1, -10]); // 6
calculateDistance([1, 10], [1, 3]); // 7
