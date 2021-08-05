'use strict';

const nav = document.querySelector('.nav');
const menuOpen = document.querySelector('.actions__menu');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', function(event) {
  nav.style.transform = 'translateX(0%)';
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', function(event) {
  nav.style.transform = 'translateX(-100%)';
  document.body.style.overflow = 'visible';
});
