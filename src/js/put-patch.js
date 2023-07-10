/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';
const updateUser = (userId, userData) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type' : 'application/json'
    },
  };
  return fetch(`${BASE_URL}/users/${userId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    }
    return response.json()
  })
};

// updateUser(8, {
//   name: 'Mittie Alexander',
//   username: 'test',
//   email: 'mittie@suwmer.edu',
  
//   },
// ).then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log(err);
//   })


