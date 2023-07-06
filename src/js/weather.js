// https://openweathermap.org/current
import makeWeatherCard from '../templates/weather-card.hbs'
import { fetchWeather } from './weather-api'

// fetch('https://api.thecatapi.com/v1/search?breed_ids=beng', {
//   headers: {
//     'x-api-key':'live_Y1L53BkbeQ0rKz6SFWIVspjzTlD5d5nxUI61VfjsZLzbHGjAIfn0nQLtY4HSLTyD'
//   }
// }).then(response => {
//   console.log(response);
//   if (!response.ok) {
//     throw new Error(response.status)
//   }
//   return response.json()
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

//live_Y1L53BkbeQ0rKz6SFWIVspjzTlD5d5nxUI61VfjsZLzbHGjAIfn0nQLtY4HSLTyD

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);
  // return `${date.getHours()}:${date.getMinutes()}`

  return `${new String(date.getHours()).padStart(2, 0)}:${new String(date.getMinutes()).padStart(
    2,
    0
  )}`;
};


const onFormSubmit = (event) => {
  event.preventDefault()
  const weatherQuery = event.currentTarget.elements.user_city.value;
  fetchWeather(weatherQuery).then(data => {
    data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise)
    data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset)
    const cardMarkup = makeWeatherCard(data)
    weatherWrapperEl.innerHTML = cardMarkup
  }).catch(err => {
    console.log(err);
    weatherWrapperEl.innerHTML = ''
  }).finally(() => {
  event.target.reset()
})
}


weatherFormEl.addEventListener('submit', onFormSubmit)




