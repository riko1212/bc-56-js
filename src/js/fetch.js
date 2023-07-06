

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status)
    }
  return response.json();  
  })
  .then(data => {
  console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('object');
  });
  
