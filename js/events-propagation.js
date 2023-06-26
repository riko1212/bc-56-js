/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

// textEl.addEventListener('click', (event) => {
//   console.log(event.target);
// });

sectionEl.addEventListener(
  'click',
  (event) => {
    console.group('listener on section');
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    console.groupEnd('listener on section');
  },
  { capture: true }
);
// sectionEl.addEventListener('click', (event) => {
//   console.group('listener on section');
//   console.log('event.target', event.target);
//   console.log('event.currentTarget', event.currentTarget);
//   console.groupEnd('listener on section');
// });
divEl.addEventListener('click', (event) => {
  console.group('listener on div');
  console.log('event.target', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd('listener on section');
});

textEl.addEventListener('click', (event) => {
  console.group('listener on text');
  console.log('event.target', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd('listener on section');
});
