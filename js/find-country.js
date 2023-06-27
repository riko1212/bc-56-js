const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputEl = document.querySelector('.js-search-input');
const outputError = document.querySelector('.js-output-error');
const countryCardEl = document.querySelector('.js-country-card');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Країна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столиця:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Населення:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площа:</strong> ${area}км<sup>2</sup></li>`;
};

const onInputSearch = ({ target }) => {
  const searchQuery = target.value.toLowerCase().trim();
  if (searchQuery === '') {
    countryCardEl.innerHTML = '';
    outputError.innerHTML = '';
    return;
  }
  const country = countries.find((el) => searchQuery === el.name.toLowerCase());

  if (country === undefined) {
    outputError.textContent = 'Такої країни немає';
    countryCardEl.innerHTML = '';
    return;
  }
  outputError.textContent = '';
  countryCardEl.innerHTML = createCountryCard(country);
};

searchInputEl.addEventListener('input', _.debounce(onInputSearch, 300));