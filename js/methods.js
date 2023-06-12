/*
 * Методи об'єкта. this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

// const changeTitle = function (newTitle) {
//   filmDuna.title = newTitle;
// };

// const filmDuna = {
//   title: 'Duna',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
//   rating: 10,
//   actors: [
//     'Rosetta Pena',
//     'Clayton Crawford',
//     'Larry Norton',
//     'Georgia Garrett',
//     'Jackson Ballard',
//   ],
//   adult: false,
//   showThis() {
//     console.log('this ->>>>', this);
//   },
//   changeTitle(newTitle) {
//     this.title = newTitle;
//   },
//   addActor(newActor) {
//     this.actors.push(newActor);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   isAdult() {
//     return this.adult;
//   },
// };

const film = {
  title: 'Duna',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,
  showThis() {
    console.log('this ->>>>', this);
  },
  changeTitle(newTitle) {
    this.title = newTitle;
  },
  addActor(newActor) {
    this.actors.push(newActor);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  isAdult() {
    return this.adult;
  },
};

console.log(film);

film.title = 'Venom';
film.addActor('John Dou');
film.updateRating(9);
console.log(film);
