import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

// Тесты для корзины интернет-магазина.

test("cart's main flow", () => {
  const cart = makeCart();
  // makeCart() – создаёт новую пустую корзину (объект)
  expect(cart.getItems()).toHaveLength(0);

  const car = { name: 'car', price: 3 };
  cart.addItem(car, 5);
  // addItem(good, count) – добавляет в корзину товары и их количество.
  // Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
  expect(cart.getItems()).toEqual(
    expect.arrayContaining([{ good: car, count: 5 }])
  );
  // getItems() – возвращает список товаров в формате [{ good, count }, ...]
  expect(cart.getCost()).toBe(15);
  // getCost() – возвращает стоимость корзины.
  // Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
  expect(cart.getCount()).toBe(5);
  // getCount() – возвращает количество товаров в корзине.

  const house = { name: 'house', price: 10 };
  cart.addItem(house, 2);
  expect(cart.getItems()).toEqual(
    expect.arrayContaining([
      { good: car, count: 5 },
      { good: house, count: 2 },
    ])
  );
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});
