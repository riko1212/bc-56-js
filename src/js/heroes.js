import heroesDB from '../json/heroes.json'
import createHeroesCard from '../templates/heroes.hbs'

console.log(createHeroesCard);

const heroesList = document.querySelector('.js-heroes-list')

const heroesCards = createHeroesCard(heroesDB)

heroesList.innerHTML = heroesCards



/*
<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
</li>
*/


// const createHeroes = (heroItem) => {
//     const { images, name, appearance, biography } = heroItem
//     if (biography.alterEgos === null) {
//         biography.alterEgos = '-'
//     }
//     return `<li class="heroes__item">
//     <img src="${images.lg}" alt="${name}" class="heroes__picture">
//     <div class="heroes__content">
//         <h2 class="heroes__name">${name}</h2>
//         <ul class="heroes__biography list">
//             <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${appearance.gender}</p></li>
//             <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${biography.alterEgos}</p></li>
//         </ul>
//     </div>
// </li>`
// }

// const heroesCards = heroesDB.map(el => {
//     return createHeroes(el)
// })

// console.log(heroesCards);

