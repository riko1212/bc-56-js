/*
 * try/catch
 * Помилки фази парсингу опрацювати неможна. Тільки помилки фази виконання.
 * Обєкт помилки
 * try/catch працює тільки з синхронним кодом
 * Опрацювання помилок в асинхронному коді
 */

console.log('First');

setTimeout(() => {
  try {
    a = 6;
    const a = 5;
  } catch (err) {
    console.log(err);
  }
  console.log('object');
}, 1000);

console.log('Second');
