//* Об'єкти window і document

console.log(document.body);

//* Дідівські методи пошуку елементів (getElementBy...)
// const titleEl = document.getElementById('title');
// titleEl.textContent = 'My title';

const menuItemElArr = document.getElementsByClassName('li');

console.log(menuItemElArr);

//* Сучасні методи пошуку елементів (querySelector, querySelectorAll)
const descEl = document.querySelectorAll('.list__item');
// const newArr = [...descEl];
console.dir(descEl);

//* Навігації по DOM дереву

const listEl = document.querySelector('.js-list');
console.dir(listEl.children);
