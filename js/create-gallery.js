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

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador" width="" height="">
  </a>
</li>
*/

// Функція для створення карточки makeGalleryCard(cardInfo)

const makeGalleryCard = (cardInfo) => {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery-item');

  // Створення a

  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  // Створення img

  const galleryImgEl = document.createElement('img');
  galleryImgEl.src = cardInfo.url;
  galleryImgEl.alt = cardInfo.alt;
  galleryImgEl.width = cardInfo.width;
  galleryImgEl.height = cardInfo.height;
  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

const galleryCardArr = pictures.map((el) => makeGalleryCard(el));

console.log(galleryCardArr);

const galleryListEl = document.querySelector('.js-gallery');

galleryListEl.append(...galleryCardArr);
// Створення li

// Створення a

// Створення img

// Перебір масиву pictures через map

// Вставка колекції карток на сторінку
