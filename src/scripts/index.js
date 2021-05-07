import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

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
