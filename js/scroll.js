const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach((section) => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const onWindowScroll = (event) => {
  console.log(window.scrollY);
  if (window.scrollY >= 1200) {
    const animatedSectionEl = document.querySelector('.js-animated-section');
    animatedSectionEl.classList.add('active');
    window.removeEventListener('scroll', throttledFunc);
  }
};

const throttledFunc = _.throttle(onWindowScroll, 300);

window.addEventListener('scroll', throttledFunc);
// window.addEventListener('scroll', onWindowScroll);
