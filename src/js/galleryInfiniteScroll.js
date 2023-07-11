import makeGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const galleryListEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');

const targetEl = document.querySelector('.js-target-element');

const unsplashApi = new UnsplashApi();

const options = {
  root: null,
  rootMargin: '0px 0px 200px 0px',
  threshold: 1,
};

const onWatching = async (entries, observer) => {
  if (entries[0].isIntersecting) {
    try {
      unsplashApi.page += 1;
      const response = await unsplashApi.fetchPhotos();
      const { total, total_pages, results } = response.data;
      const galleryMarkup = makeGalleryCard(results);
      galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);
      if (total_pages === unsplashApi.page) {
        observer.unobserve(targetEl);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observer = new IntersectionObserver(onWatching, options);

const onSearchFormElSubmit = async event => {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.user_search_query.value;
  unsplashApi.searchQuery = searchQuery;
  //Через  async/await
  try {
    const response = await unsplashApi.fetchPhotos();
    const { total, total_pages, results } = response.data;
    if (total_pages === 0) {
      galleryListEl.innerHTML = '';
      throw 'По цьому запиту немає фото';
    }
    if (total_pages === 1) {
      const galleryMarkup = makeGalleryCard(results);
      galleryListEl.innerHTML = galleryMarkup;
      return;
    }
    const galleryMarkup = makeGalleryCard(results);
    galleryListEl.innerHTML = galleryMarkup;
    observer.observe(targetEl);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
