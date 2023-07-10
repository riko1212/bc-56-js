/*
 * Method (GET).
 */

import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
let data =5

axios.get(`${BASE_URL}/users`).then(response => {
  response.data;
}).catch(err => {
  console.log(err.response.status);
})

console.log(data);

// fetch(`${BASE_URL}/users`, { method: 'GET' }).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status)
  
//   }
//   console.log(response);
//   return response.json()
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })
