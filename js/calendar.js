const calendarEL = document.querySelector('.js-calendar');
let prevCalendarItem = null;

const onCalendarELClick = (event) => {
  const { target } = event;

  // Якщо наш цільовий елемент це не TD або порожній TD, нічого робити не потрібно
  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  // Якщо це той самий елемент, перемикаємо клас active і виходимо
  if (prevCalendarItem === target) {
    target.classList.toggle('active');
    return;
  }
  if (prevCalendarItem !== null) {
    // Якщо це не перший клік, прибираємо з попереднього клас active
    prevCalendarItem.classList.remove('active');
  }

  target.classList.add('active');
  prevCalendarItem = target;
};

calendarEL.addEventListener('click', onCalendarELClick);
