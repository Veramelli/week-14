"use strict"

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function () {
        items.forEach(elem => elem.classList.remove('active'));
        this.classList.add('active');
    });
});