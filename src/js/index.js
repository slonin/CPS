import Swiper, {Pagination} from 'swiper';
import '../scss/style.scss';

const headerButtonMenu = document.querySelector('.header__button-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const buttonCloseMenu = document.querySelector('.button--close');
const navigationLinks = document.querySelectorAll('.navigation__link');
const buttonsOpenFormFeedback = document.querySelectorAll('.button--chat');
const formFeedback = document.querySelector('.form-feedback');
const menuLinks = document.querySelectorAll('.menu__link');
const blur = document.querySelector('.blur');
const buttonCloseFormFeedback = document.querySelector('.form-feedback__button');
const buttonsOpenFormCall = document.querySelectorAll('.button--call');
const formCall = document.querySelector('.form-call');
const buttonCloseFormCall = document.querySelector('.form-call__button');
const aboutButton = document.querySelector('.about__button');
const aboutText = document.querySelectorAll('.about__text');


menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        menuLinks.forEach(link => {
            link.classList.remove('menu__link--active');
        })
        
        event.target.classList.add('menu__link--active');
    })
})

navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navigationLinks.forEach(link => {
            link.classList.remove('navigation__link--active');
        })
        
        event.target.classList.add('navigation__link--active');
    })
})

aboutButton.addEventListener('click', function() {
    aboutText.forEach(text => {
        text.classList.toggle('about__text--hide');
    })

    aboutButton.classList.toggle('rotated');
})

function showMobileMenu() {
    mobileMenu.classList.toggle('mobile-menu--opened');
    blur.classList.toggle('blur--visible');
}

headerButtonMenu.addEventListener('click', showMobileMenu);
buttonCloseMenu.addEventListener('click', showMobileMenu);

buttonsOpenFormFeedback.forEach(button => {
    button.addEventListener('click', function() {
        const top = window.pageYOffset;
        formFeedback.style.top = `${top}px`;
        formFeedback.classList.toggle('form-feedback--opened');
        blur.classList.toggle('blur--visible');
    })
})

buttonCloseFormFeedback.addEventListener('click', function() {
    formFeedback.classList.toggle('form-feedback--opened');
    blur.classList.toggle('blur--visible');
})

buttonsOpenFormCall.forEach(button => {
    button.addEventListener('click', function() {
        const top = window.pageYOffset;
        formCall.style.top = `${top}px`;
        formCall.classList.toggle('form-call--opened');
        blur.classList.toggle('blur--visible');
    })
})
    
buttonCloseFormCall.addEventListener('click', function(event) {
    formCall.classList.toggle('form-call--opened');
    blur.classList.toggle('blur--visible');
})



Swiper.use([Pagination]);

const swiperBrands = new Swiper('.swiper-brands', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})

const swiperServices = new Swiper('.services__swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})

const swiperPrice = new Swiper('.price__swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})


if (window.innerWidth >= 575) {
    swiperBrands.destroy();
    swiperServices.destroy();
    swiperPrice.destroy();
}

const brandsList = document.querySelector('.brands__list'); 
const brandsButton = document.querySelector('.brands__button');
const servicesList = document.querySelector('.services__list');
const servicesButton = document.querySelector('.services__button');

brandsButton.addEventListener('click', function() {
    if (!brandsList.classList.contains('brands__list--unfolded')) {
        brandsList.classList.add('brands__list--unfolded');
        brandsButton.textContent = 'Скрыть'
    } else {
        brandsList.classList.remove('brands__list--unfolded');
        brandsButton.textContent = 'Показать все'
    }

    brandsButton.classList.toggle('rotated');
});

servicesButton.addEventListener('click', function() {
    if (!servicesList.classList.contains('services__list--unfolded')) {
        servicesList.classList.add('services__list--unfolded');
        servicesButton.textContent = 'Скрыть'
    } else {
        servicesList.classList.remove('services__list--unfolded');
        servicesButton.textContent = 'Показать все'
    }

    servicesButton.classList.toggle('rotated');
});
