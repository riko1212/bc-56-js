const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');
const galleryImgEls = document.querySelectorAll('.gallery__img');

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
