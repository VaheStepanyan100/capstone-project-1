const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-button');

const mobileMenu = document.querySelector('header');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
