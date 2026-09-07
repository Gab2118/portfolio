const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('header nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
});