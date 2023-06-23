const accordionBtnEl = document.querySelectorAll('.js-accordion-btn');

accordionBtnEl.forEach((el, i, arr) => {
  el.addEventListener('click', ({ target }) => {
    const answer = target.nextElementSibling;
    answer.classList.toggle('active');
  });
});
