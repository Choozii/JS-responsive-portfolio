const close = document.getElementById('nav-close'),
navMenu = document.getElementById('nav-menu'),
open = document.getElementById('nav-open');

close.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})
open.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})