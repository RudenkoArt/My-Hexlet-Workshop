const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const freeEmailDomains = ['gmail.com', 'yandex.ru', 'hotmail.com', 'yahoo.com'];

// Функция getFreeDomainsCount() принимает на вход список имейлов,
// а возвращает количество имейлов, расположенных на каждом бесплатном домене.
// Список бесплатных доменов хранится в константе freeEmailDomains.

const getFreeDomainsCount = (emails) => emails
    .map((email) => {
      const domain = email.split('@')[1];
      // разбираем каждый имейл на массив состоящий из
      // имени и домена и возвращаем домены по индексу [1]
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    // фильтруем по набору бесплатных доменов записанных
    // в константе freeEmailDomains отсекая лишние
    .reduce((acc, domain) => {
      const result = acc[domain] ? acc[domain] += 1 : acc[domain] = 1;
      // при помощи метода reduce() подсчитываем
      // общее количество каждого уникального
      // домена находящегося в массиве
      return result, acc;
    }, {});

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
