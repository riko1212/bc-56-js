const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const paintElements = () => {
  palletItemEl.forEach((element) => {
    const color = randomColor();
    const { style, dataset } = element;
    style.backgroundColor = color;
    dataset.elementColor = color;
  });
};

paintElements();

const onPalletElClick = ({ target }) => {
  if (target.nodeName !== 'LI') {
    return;
  }
  console.dir(target);
  const palletItemColor = target.dataset.elementColor;
  const palletOutputColor = target.querySelector('.js-pallet__item-color');
  palletOutputColor.textContent = palletItemColor;
};

palletEl.addEventListener('click', onPalletElClick);
