import Swiper, {Pagination} from 'swiper';
import '../scss/style.scss';

const body = document.body;
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
const brandsItem = brandsList.querySelector('.brands__item');
const brandsButton = document.querySelector('.brands__button');
const servicesList = document.querySelector('.services__list');
const servicesItem = servicesList.querySelector('.services__item')
const servicesButton = document.querySelector('.services__button');

console.log(servicesItem.offsetHeight);
 


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

    brandsList.style.height = `${brandsItem.offsetHeight * 2 + 16}px`;
    servicesList.style.height = `${servicesItem.offsetHeight + 16}px`;

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
        brandsList.style.height = '100%';
        brandsList.classList.add('brands__list--unfolded')
        brandsButton.textContent = 'Скрыть'
    } else {
        brandsList.style.height = `${brandsItem.offsetHeight * 2 + 16}px`;
        brandsButton.textContent = 'Показать все'
        brandsList.classList.remove('brands__list--unfolded')
    }

    brandsButton.classList.toggle('rotated');
});

servicesButton.addEventListener('click', function() {
    if (!servicesList.classList.contains('services__list--unfolded')) {
        servicesList.style.height = '100%';
        servicesList.classList.add('services__list--unfolded');
        servicesButton.textContent = 'Скрыть'
    } else {
        servicesList.style.height = `${servicesItem.offsetHeight + 16}px`;
        servicesButton.textContent = 'Показать все';
        servicesList.classList.remove('services__list--unfolded')
    }

    servicesButton.classList.toggle('rotated');
});


function showMobileMenu() {
    menuWrapper.classList.toggle('menu-wrapper--opened');
    disableScroll();
}

function disableScroll() {
   body.classList.toggle('no-scroll');
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
        if(!menuWrapper.classList.contains('menu-wrapper--opened')) {
            disableScroll();
        }
    })
})

feedbackWrapper.addEventListener('click', function(event) {
    if(event.target === buttonCloseFormFeedback || event.target === feedbackWrapper) {
        feedbackWrapper.classList.toggle('form-wrapper--opened');
    }

    if(!menuWrapper.classList.contains('menu-wrapper--opened')) {
        disableScroll();
    }
})

buttonsOpenFormCall.forEach(button => {
    button.addEventListener('click', function() {
        const top = window.pageYOffset;
        callWrapper.style.top = `${top}px`;
        callWrapper.classList.toggle('form-wrapper--opened');
        if(!menuWrapper.classList.contains('menu-wrapper--opened')) {
            disableScroll();
        }
    })
})
    
callWrapper.addEventListener('click', function(event) {
    if(event.target === buttonCloseFormCall || event.target === callWrapper)
    callWrapper.classList.toggle('form-wrapper--opened');

    if(!menuWrapper.classList.contains('menu-wrapper--opened')) {
        disableScroll();
    }
})







