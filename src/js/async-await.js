/*
 * async/await
 * асинхронна(async) функція ЗАВЖДИ провертає проміс.
 * await заставляє функцію чекати виконання проміса.
 * await неможна використовувати  поза асинхронними функціями.
 * try/catch для вудловлення помилок
 */

// const fn = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     const data = await response.json();
//     return data;
//     // data.forEach(el => {
//     //   console.log(el);
//     // });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }

// .then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// });
// };

// const data = fn().then(data => {
//   console.log(data);
// });
// const newFn = async () => {
//   const finalData = await fn();
//   console.log(finalData);
// };

// console.log(newFn());

//? TASK 01
// Перепиши на async/await
const loadPosts = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
  // return fetch(url).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }

  //   return response.json();
  // });
};

//Варіант обробки через async

// const fn = async () => {
//   const response = await loadPosts('https://jsonplaceholder.typicode.com/posts');
//   console.log(response);
// };

// fn();

//Варіант обробки через then

// loadPosts('https://jsonplaceholder.typicode.com/posts').then(data => {
//   console.log(data);
// });
// .catch(err => {
//   console.log(err);
// });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

wait().then(data => {
  console.log(data * 5);
});
// ...що тут написати?
// щоб викликати wait() і дочекатися результату "10" від async-функції
// не забувайте, тут не можна використовувати "await"
