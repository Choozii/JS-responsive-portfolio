/*=== nav ===*/
const close = document.getElementById('nav-close'),
navMenu = document.getElementById('nav-menu'),
open = document.getElementById('nav-open');

close.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})
open.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(item=> item.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');

}))

const github = document.querySelector("#github");
github.addEventListener('click',()=>{
    window.open('https://github.com/Choozii','_blank');
})

const notion = document.querySelector("#notion");
notion.addEventListener('click', ()=>{
    window.open('https://www.notion.so/Jiye-Choo-d2b15f377f704e2daf0b3d17149035bb','_blnak');
})

const project_RickAndMorty = document.querySelector('#project_RickAndMorty');
project_RickAndMorty.addEventListener('click',()=>{
    window.open('https://github.com/Choozii/RickAndMortyDex','_blank');
})

const project_TodoList = document.querySelector('#project_TodoList');
project_TodoList.addEventListener('click',()=>{
    window.open('https://github.com/Choozii/TodoList','_blank');
})
/*=== animation effect ===*/

gsap.from('.nav__open', {opacity : 0, duration : 1, delay:2, y:10})
gsap.from('.nav__item', {opacity : 0, duration : 1, delay : 2.1, y: 30, stagger : 0.2})

gsap.from('.home__title', {opacity : 0, duration : 1, delay : 1.6, y: 30})
gsap.from('.home__description', {opacity : 0, duration : 1, delay : 1.8, y: 30})
gsap.from('.home__button', {opacity : 0, duration : 1, delay : 2.1, y: 30})
gsap.from('.home__image', {opacity : 0, duration : 1, delay : 1.3, y: 30})
//gsap.from('.contacts__icons', {opacity : 0, duration : 1, delay : 1.8, y: 30})

const header = document.querySelector("#home");
const headerHeight = header.getBoundingClientRect().height;
