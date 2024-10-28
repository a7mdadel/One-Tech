const btn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-list');

btn.addEventListener('click', () => {
   menu.classList.toggle('active')
});