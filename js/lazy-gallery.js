const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');
const galleryImgEls = document.querySelectorAll('.gallery__img');

galleryImgEls.forEach((el) => {
  el.addEventListener(
    'load',
    (e) => {
      e.target.classList.add('appear');
    },
    { once: true }
  );
});

const onGalleryClick = (event) => {
  // event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  bannerImgEl.src = event.target.dataset.bannerUrl;
};
galleryEl.addEventListener('click', onGalleryClick);

//* basicLightbox gallery

// galleryEl.addEventListener('click', (e) => {
//   basicLightbox
//     .create(
//       `
//       <button class="js-modal-close">X</button>
//     <img src="${e.target.dataset.bannerUrl}" width="800" height="600">
// `
//     )
//     .show();
//   const modalCloseEl = document.querySelector('.js-modal-close');
//   modalCloseEl.addEventListener('click', () => {
//     document.querySelector('.basicLightbox').remove();
//   });
// });

//*----------------------------------

// const addSrcAttrToImg = () => {
//   galleryImgEls.forEach((el) => {
//     el.src = el.dataset.src;
//   });
// };

// const createLazySizesScript = () => {
//   const script = document.createElement('script');

//   script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

//   return script;
// };

// if ('loading' in HTMLImageElement.prototype) {
//   console.log('Атрибут loading підтримується');
//   addSrcAttrToImg();
// } else {
//   console.log('Атрибут loading не підтримується');
//   document.body.append(createLazySizesScript());
// }
