'use strict';
// import smoothscroll from 'smoothscroll-polyfill';
const navToggle = document.querySelector('.main-nav__toggle');
const navMain = document.querySelector('.main-nav');
const pageBody = document.querySelector('.page__body');
//
// window.__forceSmoothScrollPolyfill__ = true;
//
// smoothscroll.polyfill();

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageBody.classList.add('page__body--block');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageBody.classList.remove('page__body--block');
  }
});
