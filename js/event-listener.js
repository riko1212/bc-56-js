/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

const swapBtnEl = document.querySelector('.js-swap-btn');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');
const imgEl = document.querySelector('.js-img');

// console.log(swapBtnEl);

// const handleSwapBtnElClick
// const swapBtnElClickHandler
// const onSwapBtnElClick

const onSwapBtnClick = () => {
  imgEl.src = 'https://picsum.photos/200/300';
};

swapBtnEl.addEventListener('click', onSwapBtnClick);

removeListenerBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', onSwapBtnClick);
});

// https://picsum.photos/200/300
