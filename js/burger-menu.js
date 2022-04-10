const menu = document.querySelector('[data-menu]');
const menuList = document.querySelector('[data-menu-list]');
const menuBtn = document.querySelector('[data-menu-button');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
    menuBtn.classList.toggle('is-open')
})