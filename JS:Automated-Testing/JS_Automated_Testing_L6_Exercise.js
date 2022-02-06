import _ from 'lodash';
import getImplementation from '../implementations/index.js';

const makeValidator = getImplementation();

// Тесты для объекта Validator.
// Этот валидатор проверяет корректность данных. Принцип его работы следующий:

// 1. С помощью метода addCheck(fn) в валидатор добавляются проверки. Каждая проверка
// представляет из себя функцию-предикат, которая принимает на вход проверяемое
// значение и возвращает либо true либо false в зависимости от того, соответствует
// ли значение требованиям проверки или нет. Проверки, добавленные в валидатор, накапливаются.
// Каждая следующая добавленная проверка дополняет предыдущую.

// 2. С помощью метода isValid(value), пользователь Validator проверяет соответствие значения всем добавленным проверкам.
// Если не было добавлено ни одной проверки, считается, что любое значение верное.

test('validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('any value')).toBeTruthy();

  validator.addCheck(_.isNumber);
  expect(validator.isValid('string')).toBeFalsy();

  validator.addCheck((v) => v > 10);
  expect(validator.isValid(11)).toBeTruthy();

  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(3)).toBeFalsy();
  expect(validator.isValid(4)).toBeFalsy();
  expect(validator.isValid(7)).toBeFalsy();
  expect(validator.isValid(12)).toBeTruthy();
});
