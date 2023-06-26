const messageListEl = document.querySelector('.js-messages-wrapper');

const onMessageListElClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const messageEl = target.closest('.message');
  // messageEl.style.display = 'none';
  messageListEl.remove();
};

messageListEl.addEventListener('click', onMessageListElClick);
