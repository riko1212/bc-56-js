const backdropEl = document.querySelector('.js-backdrop');
const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');

// const toggleModal = () => {
//   backdropEl.classList.toggle('is-open');

// };

// modalOpenBtnEl.addEventListener('click', toggleModal);

// modalCloseBtnEl.addEventListener('click', toggleModal);
const onEscClick = (event) => {
  if (event.code === 'Escape') {
    onModalCloseBtnElClick();
  }
};

const onModalCloseBtnElClick = () => {
  backdropEl.classList.remove('is-open');
  document.removeEventListener('keydown', onEscClick);
};

const onModalOpenBtnElClick = () => {
  backdropEl.classList.add('is-open');
  document.addEventListener('keydown', onEscClick);
};

const onBackdropElClick = ({ target, currentTarget }) => {
  if (target !== currentTarget) {
    return;
  }
  onModalCloseBtnElClick();
  console.log(event);
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);

modalCloseBtnEl.addEventListener('click', onModalCloseBtnElClick);

backdropEl.addEventListener('click', onBackdropElClick);
