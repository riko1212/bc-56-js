// https://openweathermap.org/current
import makeWeatherCard from '../templates/weather-card.hbs'
import { fetchWeather } from './weather-api'
// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_Y1L53BkbeQ0rKz6SFWIVspjzTlD5d5nxUI61VfjsZLzbHGjAIfn0nQLtY4HSLTyD";

// fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng').then(response => {
  
//   if (!response.ok) {
//     throw new Error(response.status)
//   }
//   return response.json()
// }).then(data => {
//   console.log(data);
//   fetch(`https://api.thecatapi.com/v1/images/${data[0].id}`).then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   })
  
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




