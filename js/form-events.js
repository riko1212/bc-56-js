/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const formInputEl = document.querySelector('.js-username-input');
const usernameEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

// console.log(formInputEl);

// formInputEl.addEventListener('focus', (event) => {
//   event.target.style.outline = 'transparent';
//   event.target.style.border = '2px solid green';
//   console.dir(event.target);
// });

// formInputEl.addEventListener('blur', (event) => {
//   // event.target.style.border = '1px solid #cccccc';
//   console.log('Hello');
// });

// const onInputElChange = (event) => {
//   if (event.target.value === '') {
//     usernameEl.innerHTML = 'користувач';
//     return;
//   }
//   usernameEl.innerHTML = event.target.value;
// };

// formInputEl.addEventListener('input', onInputElChange);

// checkboxEl.addEventListener('change', (event) => {
//   if (event.target.checked && formInputEl.value !== '') {
//     submitBtnEl.disabled = false;
//     return;
//   }
//   submitBtnEl.disabled = true;
// });

checkboxEl.addEventListener('change', ({ target }) => {
  if (target.checked && formInputEl.value !== '') {
    submitBtnEl.disabled = false;
    return;
  }
  submitBtnEl.disabled = true;
});

contactFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Submit');
  console.log(event);
  event.target.reset();
  submitBtnEl.disabled = true;
});
