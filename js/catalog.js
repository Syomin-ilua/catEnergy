// Бургер меню
const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu_wrapper');

burgerBtn.addEventListener('click', function(e) {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if(burgerBtn.classList.contains('active')) {
        burgerMenu.style.maxHeight = burgerMenu.scrollHeight + 'px';
    } else {
        burgerMenu.style.maxHeight = 0;
    }
});


