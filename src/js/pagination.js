// https://jsonplaceholder.typicode.com/

import createPostCards from '../templates/posts.hbs'
import JsonPlaceholderApi from './jsonplaceholder-api'

const postListEl = document.querySelector('.js-posts')
const loadMoreBtnEl = document.querySelector('.js-load-more')


const jsonPlaceholderApi = new JsonPlaceholderApi()


// const makeMarkup = () => {
//   jsonPlaceholderApi.fetchPosts().then(data => {
//   const markupText = createPostCards(data)
//   postListEl.insertAdjacentHTML('beforeend', markupText )
// }).catch(err => {
//   console.log(err);
// })
// }
//      makeMarkup()


// const onLoadMoreBtnElClick = (event) => {
// jsonPlaceholderApi.page +=1
//  makeMarkup()
// }

const loadPosts = () => {
  jsonPlaceholderApi.fetchPosts().then(data => {
  const markupText = createPostCards(data)
    postListEl.innerHTML = markupText
    loadMoreBtnEl.classList.remove('is-hidden')
    loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick)

}).catch(err => {
  console.log(err);
})   
}

loadPosts()

const onLoadMoreBtnElClick = (event) => {
jsonPlaceholderApi.page +=1
  jsonPlaceholderApi.fetchPosts().then(data => {
  const markupText = createPostCards(data)
  postListEl.insertAdjacentHTML('beforeend', markupText )
}).catch(err => {
  console.log(err);
}) 
  if (jsonPlaceholderApi.page === 10) {
    loadMoreBtnEl.classList.add('is-hidden')
    loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick)

  }
}



