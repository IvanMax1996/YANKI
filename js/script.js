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

const searchIcon = document.querySelector('.icon-item__search');
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


// <----------------------------------------------------------->

// Раскрытие заголовков футера

const footerTitle = document.querySelectorAll('.footer-block-item__title');
const hiddenTitle = document.querySelectorAll('.footer-block-item_hidden');
const hrFooterLast = document.querySelector('.footer-section__hr-last');

footerTitle.forEach((item, i) => {
  item.addEventListener('click', e => {
    e.preventDefault();
    
    hiddenTitle[i].classList.toggle('visible');
    item.classList.toggle('footer-block-item__title-active');
    hrFooterLast.classList.toggle('footer-section__hr-last_hidden');
  });
});

// <----------------------------------------------------------->

// Сдвиг меню для телефона
const ru = document.querySelector('.ru');
const menuPhoneTop = document.querySelector('.menu-phone');

ru.addEventListener('click', e => {
  e.preventDefault();

  menuPhoneTop.classList.toggle('menu-phone_top');
});


// <----------------------------------------------------------->

// Выпадающий список
const menuPhoneUAH = document.querySelector('.menu-phone-search-block__list-item');
const menuPhoneActiveUAH = document.querySelector('.menu-phone-search-block__list-active');
const menuPhoneList = document.querySelector('.menu-phone-search-block__list');

menuPhoneUAH.addEventListener('click', e => {
  e.preventDefault();

  menuPhoneList.classList.toggle('menu-phone-search-block__list_height');
  menuPhoneActiveUAH.classList.toggle('menu-phone-search-block__list-active-visible');
  menuPhoneUAH.classList.toggle('menu-phone-search-block__list-item-active');
});


// <----------------------------------------------------------->

// Выпадающий список
const burgerPhone = document.querySelector('.burger-phone');
const menuPhone = document.querySelector('.menu-phone');

burgerPhone.addEventListener('click', e => {
  e.preventDefault();
  if (!menuPhone.classList.contains('menu-phone_visible')) {
    menuPhone.classList.remove('menu-phone-no-active');
    menuPhone.classList.add('menu-phone_visible');
  } else {
    menuPhone.classList.add('menu-phone-no-active');
    setTimeout(() => {
      menuPhone.classList.remove('menu-phone_visible');
    }, 1500);
  }
});


