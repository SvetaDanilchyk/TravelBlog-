import { category, featuredExplore } from "./const/place.js";

const menuHamburger = document.querySelector(".menu__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".mobile-menu__btn-close");
const sliderItems = document.getElementById("category");
const featuredSlider = document.getElementById("featured-slider");

menuHamburger.addEventListener("click", () => {
  mobileMenu.style.display = "grid";
});

close.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

sliderItems.innerHTML = category
  .map(
    (item) => `
    <div class="slider__item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
    </div>
  `,
  )
  .join("");

featuredSlider.innerHTML = featuredExplore
  .map(
    (item) => `
     <article class="post-card"  data-id="${item.id}>
            <div class="post-card__image">
              <img src="${item.img}" alt="${item.altText}" />
            </div>
            <h3 class="post-card__title">
              ${item.title}
            </h3>
            <p class="post-card__excerpt">
             ${item.text}
            </p>
            <div class="post-card__meta">
              <a href="">${item.subtitle}</a>
              <span>By</span>
              <span>${item.autorName}</span>
            </div>
          </article>`,
  )
  .join("");
