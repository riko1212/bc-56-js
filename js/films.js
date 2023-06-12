const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: true,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

const getAllTitlesOfFilms = function (films) {
  const filmNames = [];
  for (const film of films) {
    filmNames.push(film.title);
  }
  return filmNames;
};

console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// Варіант 1

// function findFilmByName(films, filmTitle) {
//   let findedFilm = null;
//   for (const film of films) {
//     if (film.title.toLowerCase() === filmTitle.toLowerCase()) {
//       findedFilm = film;
//       break;
//     }
//   }
//   return findedFilm;
// }

// Варіант 2

function findFilmByName(films, filmTitle) {
  for (const film of films) {
    if (film.title.toLowerCase() === filmTitle.toLowerCase()) {
      return film;
    }
  }
}

console.log(findFilmByName(filmoteka, 'Luca'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

function getAdultFilms(films) {
  const obj = {
    adultFilms: [],
    notAdultFilms: [],
  };

  for (const film of films) {
    if (film.adult) {
      obj.adultFilms.push(film);
    } else {
      obj.notAdultFilms.push(film);
    }
  }
  return obj;
}

console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.
// function getNotAdultFilms(films) {
//   const notAdultFilms = [];
//   for (const film of films) {
//     if (!film.adult) {
//       notAdultFilms.push(film);
//     }
//   }
//   return notAdultFilms;
// }

// console.log(getNotAdultFilms(filmoteka));
