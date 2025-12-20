import {category, featuredExplore } from './const/place.js';

const menuHamburger = document.querySelector('.menu__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.mobile-menu__btn-close');
const sliderItems = document.getElementById('category');


menuHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'grid';
});

close.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

console.log(sliderItems);
sliderItems.innerHTML = category.map(item => `
    <div class="slider__item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
    </div>
  `)
  .join("");

/* for (let i = 0; i < 4; i++) {
  sliderItems.innerHTML += `<div id=${data[i].id} class="slider__item col-lg-4 col-md-4 col-xs-3 js-slider"></div>`;
}

const itemsSlider = document.querySelectorAll(".js-slider");

itemsSlider.forEach((item, index) => {
  item.innerHTML += `<img class="slider__img col-lg-12" src=${data[index].imageUrl}>`;
  item.innerHTML +=
    `<div class="slider__descr">` +
    `<div class="slider__descr-header">${data[index].name}</div>` +
    `<div class="slider__descr-text">${data[index].city},${data[index].country}</div></div>`;
}); */
