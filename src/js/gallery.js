import makeGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const galleryListEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashApi();

const onLoadMoreBtnElClick = event => {
  unsplashApi.page += 1;
  unsplashApi
    .fetchPhotos()
    .then(response => {
      console.log(response);
      const { total, total_pages, results } = response.data;
      const galleryMarkup = makeGalleryCard(results);
      galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);
      if (total_pages === unsplashApi.page) {
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const onSearchFormElSubmit = event => {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.user_search_query.value;
  unsplashApi.searchQuery = searchQuery;
  unsplashApi
    .fetchPhotos()
    .then(response => {
      // console.log(response.data.results);
      const { total, total_pages, results } = response.data;
      if (total_pages === 0) {
        galleryListEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick);
        throw 'По цьому запиту немає фото';
      }
      if (total_pages === 1) {
        const galleryMarkup = makeGalleryCard(results);
        galleryListEl.innerHTML = galleryMarkup;
        loadMoreBtnEl.classList.add('is-hidden');
         loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick);

        return;
      }
      const galleryMarkup = makeGalleryCard(results);
      galleryListEl.innerHTML = galleryMarkup;
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);