import Swiper, {Pagination} from 'swiper';
import '../scss/style.scss';

const headerButtonMenu = document.querySelector('.header__button-menu');
const buttonCloseMenu = document.querySelector('.button--close');
const menuWrapper = document.querySelector('.menu-wrapper');
const buttonsOpenFormFeedback = document.querySelectorAll('.button--chat');
const feedbackWrapper = document.querySelector('[data-form="feedback"]');
const buttonCloseFormFeedback = feedbackWrapper.querySelector('.form-feedback__button');
const buttonsOpenFormCall = document.querySelectorAll('.button--call');
const callWrapper = document.querySelector('[data-form="call"]');
const buttonCloseFormCall = callWrapper.querySelector('.form-call__button');

const navigationLinks = document.querySelectorAll('.navigation__link');
const menuLinks = document.querySelectorAll('.menu__link');
const aboutButton = document.querySelector('.about__button');
const aboutText = document.querySelectorAll('.about__text');
const brandsList = document.querySelector('.brands__list'); 
const brandsButton = document.querySelector('.brands__button');
const servicesList = document.querySelector('.services__list');
const servicesButton = document.querySelector('.services__button');

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


function showMobileMenu() {
    menuWrapper.classList.toggle('menu-wrapper--opened');
}

headerButtonMenu.addEventListener('click', showMobileMenu);

menuWrapper.addEventListener('click', function(event) {
    if(event.target === buttonCloseMenu || event.target === menuWrapper) {
        showMobileMenu();
    }
});

buttonsOpenFormFeedback.forEach(button => {
    button.addEventListener('click', function() {
        const top = window.pageYOffset;
        feedbackWrapper.style.top = `${top}px`;
        feedbackWrapper.classList.toggle('form-wrapper--opened');
    })
})

feedbackWrapper.addEventListener('click', function(event) {
    if(event.target === buttonCloseFormFeedback || event.target === feedbackWrapper) {
        feedbackWrapper.classList.toggle('form-wrapper--opened');
    }
})

buttonsOpenFormCall.forEach(button => {
    button.addEventListener('click', function() {
        const top = window.pageYOffset;
        callWrapper.style.top = `${top}px`;
        callWrapper.classList.toggle('form-wrapper--opened');
    })
})
    
callWrapper.addEventListener('click', function(event) {
    if(event.target === buttonCloseFormCall || event.target === callWrapper)
    callWrapper.classList.toggle('form-wrapper--opened');
})







