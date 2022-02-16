// getGcd() находит наибольший общий делитель двух чисел
const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));

// makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
// на выходе происходит нормализация дроби
const makeRational = (num, den) => {
  const gcd = getGcd(num, den);
  return { numer: num / gcd, denom: den / gcd };
};

// getNumer() - возвращает числитель
const getNumer = (rational) => rational.numer;

// getDenom() - возвращает знаменатель
const getDenom = (rational) => rational.denom;

// add() - складывает переданные дроби
const add = (rational1, rational2) => makeRational(
  getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
  getDenom(rational1) * getDenom(rational2),
);

// sub() - находит разность между двумя дробями
const sub = (rational1, rational2) => makeRational(
  getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
  getDenom(rational1) * getDenom(rational2),
);

// ratToString() возвращает строковое представление числа
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);

getNumer(rat1); // 1
getDenom(rat1); // 3

const rat3 = add(rat1, rat2);
ratToString(rat3); // '11/3'

const rat4 = sub(rat1, rat2);
ratToString(rat4); // '-3/1'

const rat5 = makeRational(-4, 16);
ratToString(rat5); // '-1/4'

const rat6 = makeRational(12, 5);

const rat7 = add(rat5, rat6);
ratToString(rat7); // '43/20'

const rat8 = sub(rat5, rat6);
ratToString(rat8); // '-53/20'
