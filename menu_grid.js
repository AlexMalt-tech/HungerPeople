const barButton = document.querySelectorAll('.menu-bar__ul__li');
const menuLine = document.querySelector('.menu-line-grid');
const menuCel = document.querySelectorAll('.menu-cel-grid');
const dot = document.querySelectorAll('.spec__dot');
const slider = document.querySelector('.block-slide');
const blockBox = document.querySelectorAll('.block-box');

// menu slider

barButton.forEach((elem, index) => {
    elem.onclick = () => {
        lineMove(index);
        classChange(index);

    }
});

function lineMove(index) {
    menuLine.style.left = -index * menuCel[index].offsetWidth + 16 + 'px';
};

function classChange(index) {
    barButton.forEach((el) => {
        el.classList.remove('menu-bar-li_active');
    });
    barButton[index].classList.add('menu-bar-li_active');
};

// specialities slider

dot.forEach((elem, index) => {
    elem.onclick = () => {
        blockMove(index);
        blockClassChange(index);
        
    }
        
});

function blockMove(index) {
    slider.style.left = -index * blockBox[index].offsetWidth + 'px';
    
};

function blockClassChange(index) {
    dot.forEach((el) => {
        el.classList.remove('active-dot');
    });
    dot[index].classList.add('active-dot');
};

// 

const menuShadow = document.querySelector('.menu-shadow');

const mobMenuBtn = document.querySelector('.nav__lines__btn');

mobMenuBtn.addEventListener('click', heyHey);

menuShadow.onclick = () => {
    menuShadow.style.display = 'none';
}

function heyHey () {
    menuShadow.style.display = 'block';
}