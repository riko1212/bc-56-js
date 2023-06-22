const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

const titleEl = document.querySelector('.js-title');
// titleEl.textContent = 'Hello';
// titleEl.innerHTML = 'Hello';
console.log(titleEl.textContent);
// titleEl.textContent = '<span class="title_current_color">Main</span> Title';
// titleEl.innerHTML = `<li class="gallery-item">
//   <a href="#">
//     <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
//   </a>
// </li>`;

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
//Без деструктуризації
// const makeGalleryCard = (cardInfo) => {
//   const galleryItemEl = `
//   <li class="gallery-item">
//   <a href="#">
//     <img src="${cardInfo.url}" alt="${cardInfo.alt}" width="${cardInfo.width}" height="${cardInfo.height}">
//   </a>
//  </li>
//   `;
//   return galleryItemEl;
// };

const makeGalleryCard = ({ url, alt, width, height } = {}) => {
  // const { url, alt, width, height } = cardInfo;
  const galleryItemEl = `
  <li class="gallery-item">
  <a href="#">
    <img src="${url}" alt="${alt}" width="${width}" height="${height}">
  </a>
 </li>
  `;
  return galleryItemEl;
};

const galleryCardArr = pictures.map((el) => makeGalleryCard(el));

console.log(galleryCardArr);

// galleryListEl.innerHTML = galleryCardArr.join('');
galleryListEl.insertAdjacentHTML('afterbegin', galleryCardArr.join(''));

// Створення масиву рядків із елементами

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCardsArr.join('');
