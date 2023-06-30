const contactFormEl = document.querySelector('.js-contact-form');

const userData = {};

const fillFormFields = () => {
  let dataFromLS;
  try {
    dataFromLS = JSON.parse(localStorage.getItem('userData'));
  } catch (err) {
    console.log(err);
  }

  console.dir(contactFormEl.elements);
  if (dataFromLS === null) {
    return;
  }
  for (const prop in dataFromLS) {
    contactFormEl.elements[prop].value = dataFromLS[prop];
  }
  console.log('object');
};

fillFormFields();

const onFormFieldChange = event => {
  const { target } = event;
  const fieldName = target.name;
  const fieldValue = target.value;

  userData[fieldName] = fieldValue;
  localStorage.setItem('userData', JSON.stringify(userData));
};

const onFormSubmit = event => {
  event.preventDefault();
  localStorage.removeItem('userData');
  contactFormEl.reset();
};

contactFormEl.addEventListener('change', onFormFieldChange);
contactFormEl.addEventListener('submit', onFormSubmit);
