// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!


// console.log('Start');

// setTimeout(() => {
//   console.log('SetTimeout');
// }, 0);
const ex = (resolve, reject) => {
  console.log('In constructor Promise');
  setTimeout(() => {
  resolve('in then');
}, 2000)
  
}

const promise = new Promise(ex);

console.log(promise);

promise.then(response => {
  console.log(response);
});

// console.log('End');

