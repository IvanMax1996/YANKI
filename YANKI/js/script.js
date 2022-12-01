'use strict';

// Слайдер

function copy() {
  let mas = [];
  
  category.forEach((item, i) => {
    mas[i] = item.innerHTML;
  });

  return mas;
}

const category = document.querySelectorAll('.box-item');
const arrowLeft = document.querySelector('.box__arrow-left');
const arrowRight = document.querySelector('.box__arrow-right');
const itemBox = copy();
let j = 0;

arrowLeft.addEventListener('click', e => {
  e.preventDefault();

  category.forEach((item, i, arr) => {
    if (i == 0) {
      item.innerHTML = arr[arr.length - 1].innerHTML;
    } else {
      item.innerHTML = itemBox[j];
      j++;
    }
    
    if (j > arr.length - 1) j = 0;
  });
});

arrowRight.addEventListener('click', e => {
  e.preventDefault();

  category.forEach((item, i, arr) => {
    if (i < arr.length - 1) {
      item.innerHTML = arr[i + 1].innerHTML;
    } else {
      item.innerHTML = itemBox[j];
      j++;
    }

    if (j > arr.length - 1) j = 0;
  });
});

// <---------------------------------------------------------->

// Бургер меню

let menuBurger = document.querySelector('.burger');
let subMenu = document.querySelector('.menu-hidden');

menuBurger.addEventListener('click', e => {
  e.preventDefault();

  if (!menuBurger.classList.contains('burger-active')) {
    menuBurger.classList.add('burger-active');
    menuBurger.classList.remove('burger-no-active');
    subMenu.classList.add('menu-active');
    subMenu.classList.remove('menu-no-active');
  } else  {
    menuBurger.classList.remove('burger-active');
    menuBurger.classList.add('burger-no-active');
    subMenu.classList.remove('menu-active');
    subMenu.classList.add('menu-no-active');
  }
});

// <----------------------------------------------------------->

// Выпадающий список

const arrowLang = document.querySelector('.ru');
const arrowCurrency = document.querySelector('.uah');
const langActive = document.querySelector('.lang-currency__active');
const currencyActive = document.querySelector('.lang-currency__active_right');

arrowLang.addEventListener('click', e => {
  e.preventDefault();

  arrowLang.classList.toggle('item-lang-currency-active');
  langActive.classList.toggle('lang-currency__active_visible');
});

arrowCurrency.addEventListener('click', e => {
  e.preventDefault();

  arrowCurrency.classList.toggle('item-lang-currency-active');
  currencyActive.classList.toggle('lang-currency__active_right-visible');
});

// <---------------------------------------------------------->

// Реализация поиска

const searchIcon = document.querySelector('.icon-item-search');
const searchBlock = document.querySelector('.search__block');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search__block-input');
const searchBlockIcon = document.querySelector('.search__block-icon');

searchIcon.addEventListener('click', e => {
  e.preventDefault();

  if (!searchBlock.classList.contains('search__block_visible')) {
    searchBlockIcon.classList.remove('search__block-icon_no-active');
    searchInput.classList.remove('search__block-input_no-active');
    searchBlock.classList.add('search__block_visible');
    search.classList.add('search_visible');
  } else {
    searchInput.classList.add('search__block-input_no-active');
    searchBlockIcon.classList.add('search__block-icon_no-active');
    setTimeout(() => {
      searchBlock.classList.remove('search__block_visible');
    }, 1000);
  }

  search.addEventListener('click', e => {
    e.preventDefault();

    search.classList.remove('search_visible');
    searchInput.classList.add('search__block-input_no-active');
    searchBlockIcon.classList.add('search__block-icon_no-active');
    setTimeout(() => {
      searchBlock.classList.remove('search__block_visible');
    }, 1000);
  });

  searchInput.value = '';
});