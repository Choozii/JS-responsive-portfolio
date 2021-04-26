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

/*=== animation effect ===*/

gsap.from('.nav__open', {opacity : 0, duration : 1, delay:2, y:10})
gsap.from('.nav__item', {opacity : 0, duration : 1, delay : 2.1, y: 30, stagger : 0.2})

gsap.from('.home__title', {opacity : 0, duration : 1, delay : 1.6, y: 30})
gsap.from('.home__description', {opacity : 0, duration : 1, delay : 1.8, y: 30})
gsap.from('.home__button', {opacity : 0, duration : 1, delay : 2.1, y: 30})
gsap.from('.home__image', {opacity : 0, duration : 1, delay : 1.3, y: 30})
gsap.from('.contacts__icons', {opacity : 0, duration : 1, delay : 1.8, y: 30})

const header = document.querySelector("#home");
const headerHeight = header.getBoundingClientRect().height;
 
// window.addEventListener("scroll", () => {
//       if (window.scrollY > headerHeight) {
//           console.log("ㅇㅇ");
//       header.setAttribute("style", "background: white;");
//    } else {
      
// header.setAttribute("style", "background: transparent;");
//    }
// });