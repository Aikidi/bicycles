'use strict';
const navToggle = document.querySelector('.main-nav__toggle');
const navMain = document.querySelector('.main-nav');
const pageBody = document.querySelector('.page__body');
const navlinks = document.querySelectorAll('.main-nav__link');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

const openMenu= () => {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  pageBody.classList.add('page__body--block');
}

const closeMenu = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  pageBody.classList.remove('page__body--block');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

for (let link of navlinks) {
  link.addEventListener('click',() => {
    closeMenu();
  })
}

// const form = document.querySelector('form');
// const formPhone = document.querySelector('#phone');
//
// form.addEventListener('change', function () {
//   form.setCustomValidity('');
//   let phoneNumber = formPhone.value;
//   let phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
//   var isphone = phoneRegExp.test(phoneNumber);
//   if (!isphone){
//     form.setCustomValidity('Not valid');
//   };
//   form.reportValidity();
// });
