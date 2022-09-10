// Переменные для меню-бургера и инициализация поведения

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger_menu');
const burgerMenuClose = document.querySelector('.burger_menu_close');

burger.addEventListener('click', function(e) {
    e.preventDefault();
    burgerMenu.classList.add('burger_menu_active');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
})
burgerMenuClose.addEventListener('click', function(e){
    e.preventDefault();
    burgerMenu.classList.remove('burger_menu_active');
    document.body.style.position = '';
    document.body.style.top = '';
})

// Переменные для смены "До" и "После" изображения кота и инициализация поведения

const beforeButton = document.querySelector('.before_button');
const afterButton = document.querySelector('.after_button');

const catBefore = document.querySelector('.cat_before');
const catAfter = document.querySelector('.cat_after');

beforeButton.addEventListener('click', function(e) {
    e.preventDefault();

    beforeButton.classList.add('before_button_active');
    afterButton.classList.remove('after_button_active');

    catBefore.classList.add('cat_before_active');
    catAfter.classList.remove('cat_after_active');
})

afterButton.addEventListener('click', function(e) {
    e.preventDefault();

    afterButton.classList.add('after_button_active');
    beforeButton.classList.remove('before_button_active');

    catAfter.classList.add('cat_after_active');
    catBefore.classList.remove('cat_before_active');
})