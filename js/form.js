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


// Валидация формы

new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true
        }
    },
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 симоволов'
        },
        email: {
            email: 'Введите корректный email',
            required: 'Введите email'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть не менее 10 симоволов'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              }
            }
          }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        
        thisForm.reset();
    }
})





