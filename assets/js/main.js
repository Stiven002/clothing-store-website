// menu action
const menuId = document.querySelector('.nav__items'),
        closeMenu = document.getElementById('icon-close'),
        menuActive = document.getElementById('menu-active'),
        cartActive = document.getElementById('cart-active');


menuActive.addEventListener('click', ()=>{
    menuId.classList.add('active-menu');
});

closeMenu.addEventListener('click', ()=>{
    menuId.classList.remove('active-menu');
});

// click item menu
const navLink = document.querySelectorAll('.item');

function linkAction(){
    navLink.forEach(n => menuId.classList.remove('active-menu'));
}

navLink.forEach(n => n.addEventListener('click', linkAction));


//slider
let imgArray = ['assets/img/model-header-1.png', 'assets/img/model-header-2.png', 'assets/img/model-header-3.png', 'assets/img/model-header-4.png',]
const imgs = document.querySelector('.slider__img');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let position = 0;
imgs.src = imgArray[position];

leftArrow.addEventListener('click', ()=>{
    if(position == 0){
        position = 3;
    }
    else{
        position--
    }
    imgs.src = imgArray[position];
});

rightArrow.addEventListener('click', ()=>{
    if(position == 3){
        position = 0;
    }
    else{
        position++
    }
    imgs.src = imgArray[position];
});

// our products slider

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carrusel__indicador',
        responsive: [
            {
              // screens greater than >= 775px
                breakpoint: 460,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
            }
            },{
              // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },{
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                }
            }
        ]
    });

    // blogs slider
    new Glider(document.querySelector('.blog__slider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.slider__docts',
        responsive: [
            {
              // screens greater than >= 775px
                breakpoint: 460,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '2',
                slidesToScroll: '2',
            }
            },{
              // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            }
        ]
    });
});

// count
let hours = 12;
let minutes = 0;
let seconds = 0;

loadSeconds();

function loadSeconds(){
    let textSeconds;
    if(seconds < 0){
        seconds = 59;
    }
    if(seconds < 10){
        textSeconds = `0${seconds}`;
    }
    else{
        textSeconds = seconds;
    }

    // show seconds in screen
    document.getElementById('seg').innerHTML = textSeconds;
    seconds--;

    loadMinutes(seconds);
}

function loadMinutes(seconds){
    let textMinutes;
    if(seconds == -1 && minutes !==0){
        setTimeout(()=>{
            minutes--
        }, 500);
    }
    else if(seconds == -1 && minutes == 0){
        setTimeout(()=>{
            minutes = 30;
        }, 500);
    }

    // show minutes in screen
    if(minutes < 10){
        textMinutes = `0${minutes}`;
    }
    else{
        textMinutes = minutes;
    }

    document.getElementById('minutes').innerHTML = textMinutes;

    loadHours(seconds,minutes);
}

function loadHours(seconds,minutes){
    let textHours;

    if(seconds == -1 && minutes == 0 && hours !== 0){
        setTimeout(()=>{
            hours--
        }, 500);
    }
    else if(seconds == -1 && minutes == 0 && hours == 0){
        hours = 12;
    }

    // show hours in screen
    if(hours < 10){
        textHours = `0${hours}`;
    }
    else{
        textHours = hours
    }

    document.getElementById('hours').innerHTML = textHours;
}

setInterval(loadSeconds, 1000)