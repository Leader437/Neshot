// Import all of Bootstrap's CSS
import "bootstrap/scss/bootstrap.scss";
import * as bootstrap from 'bootstrap';
import 'boxicons/css/boxicons.min.css';

// core version + all modules bundle:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles
import 'swiper/css/bundle';

// import our custom css
import '../Scss/main.scss';

// Swiper Settings
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
});



let body = document.querySelector('body');
let nav = document.querySelector('.navbar');
let navLinkContainer = document.querySelector('#navbarNav');
let navLink = document.querySelectorAll('.nav-link');
let hamburger = document.querySelector('.navbar-toggler');

// add styles to navbar on scroll
window.onscroll = () => {
    nav.classList.toggle('move', window.scrollY > 50);
}

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
})

// close navbar on clicking the navlinks in small screen sizes
navLink.forEach((e) => {
    e.addEventListener('click', () => {
        navLinkContainer.classList.remove('show');
        navLinkContainer.classList.add('collapse');
    })
});