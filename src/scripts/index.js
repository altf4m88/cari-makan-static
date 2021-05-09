import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const {restaurants} = require('../DATA.json');

console.log('Hello Coders! :)');

const menuLines = document.querySelector(".hamburger");
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const nav = document.querySelector(".nav-list");

menuLines.addEventListener('click', function(event){
    nav.classList.toggle('on-click');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    nav.classList.remove('on-click');
});

main.addEventListener('click', function () {
    nav.classList.remove('on-click');
});

const cardParent = document.querySelector('#cards');
let cards = "";

restaurants.forEach(data => {
    cards += `
        <article tabindex="0" class="card" id=${data.id}>
            <img class="card-image" src=${data.pictureId} alt="Foto ${data.name}">
            <div class="card-content">
                <div class="card-header">
                    <h2 class="card-title">${data.name}, ${data.city}</h2>
                    <div class="card-rating">
                        <p><i class="fas fa-star"></i> ${data.rating}</p>
                    </div>
                </div>
                <p class="card-description">
                    ${data.description}
                </p>
            </div>
        </article>
    `;
});

cardParent.innerHTML = cards;