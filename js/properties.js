//* Атрибути в якості властивостей об'єкту

const imgEl = document.querySelector('.js-img');
const swapImgBtnEl = document.querySelector('.js-swap-image-btn');
console.dir(imgEl);

// https://picsum.photos/200/300

swapImgBtnEl.addEventListener('click', () => {
  imgEl.alt = 'random img';
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.title = '';
});

/*
 * Доступ до атрибутів
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

console.log(imgEl.setAttribute('title', 'fake'));
