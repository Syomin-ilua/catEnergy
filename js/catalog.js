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


