// Бургер меню

const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu_wrapper');

burgerBtn.addEventListener('click', function(e) {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if(burgerBtn.classList.contains('active')) {
        burgerMenu.style.maxHeight = '171px';
    } else {
        burgerMenu.style.maxHeight = 0;
    }
});

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