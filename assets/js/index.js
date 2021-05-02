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

project_RickAndMorty.addEventListener('mouseover',()=>{
    document.querySelector('#project_RickAndMorty_description').classList.toggle('show_desciption');
})
project_RickAndMorty.addEventListener('mouseout',()=>{
    document.querySelector('#project_RickAndMorty_description').classList.toggle('show_desciption');
})

const project_TodoList = document.querySelector('#project_TodoList');
project_TodoList.addEventListener('click',()=>{
    window.open('https://github.com/Choozii/TodoList','_blank');
})

project_TodoList.addEventListener('mouseover',()=>{
    document.querySelector('#project_TodoList_description').classList.toggle('show_desciption');
})
project_TodoList.addEventListener('mouseout',()=>{
    document.querySelector('#project_TodoList_description').classList.toggle('show_desciption');
})

const project_LMS = document.querySelector('#project_LMS');

project_LMS.addEventListener('mouseover',()=>{
    document.querySelector('#project_LMS_description').classList.toggle('show_desciption');
})
project_LMS.addEventListener('mouseout',()=>{
    document.querySelector('#project_LMS_description').classList.toggle('show_desciption');
})

/* ===== scroll revel animation =====*/
const sr = ScrollReveal({
    origin :'top',
    distance : '80px',
    duration : 2000,
    reset : true
})
//home
sr.reveal('.home__title',{delay:200});
sr.reveal('.home__description',{delay:200});
sr.reveal('.home__image',{delay:200});
//about
sr.reveal('.about .title',{delay:200});
sr.reveal('.about .content',{delay : 300});
//project
sr.reveal('.project_img',{delay:200});
//contact
sr.reveal('.contact__container',{delay:200});