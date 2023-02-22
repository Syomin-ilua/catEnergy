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

// Маскирую телефон

let tel = document.querySelector('.js_inputPhone');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(tel);

// Валидация формы

const modalWraper = document.querySelector('.succes__modal_wrapper');
const modalOverlay = document.querySelector('.modal__overlay');

const modalCloseButton = document.querySelector('.modal__close_button');

const form = document.querySelector('.form');

let validation = new JustValidate('.form');

validation
.addField('.name_input', [
    {
        rule: 'minLength',
        value: 3,
    },
    {
        rule: 'maxLength',
        value: 30,
    },
    {
        rule: 'required',
        value: 'true',
    }
])
.addField('.weight_input', [
    {
        rule: 'required',
        value: 'true',
    }
])
.addField('.age_input', [
    {
        rule: 'required',
        value: 'true',
    }
])
.addField('.js_inputEmail', [
    {
        rule: 'required',
        value: 'true',
    },
    {
        rule: 'email',
        value: 'true',
    }
])
.addField('.js_inputPhone', [
    {
        rule: 'required',
        value: 'true',
    },
    {
        rule: 'tel',
        validator: function() {
            const phone = tel.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
    }
])
.addField('.input_comment', [
    {
        rule: 'required',
        value: 'true',
    }
]).onSuccess((event) => {
    
    modalOverlay.classList.add('active');
    modalWraper.classList.add('active');

    form.reset();

});

modalCloseButton.addEventListener('click', function(e) {
    e.preventDefault();

    modalOverlay.classList.remove('active');
    modalWraper.classList.remove('active');
});

modalOverlay.addEventListener('click', function(e) {
    e.preventDefault();

    modalOverlay.classList.remove('active');
    modalWraper.classList.remove('active');
});





