const menu = document.querySelector('[data-menu]');
const menuList = document.querySelector('[data-menu-list]');
const menuBtn = document.querySelector('[data-menu-button');
const linksList = document.querySelectorAll('[data-link]');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
    menuBtn.classList.toggle('is-open')
    document.body.classList.toggle('is-blocked')
})

linksList.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show')
        menuBtn.classList.remove('is-open')
        document.body.classList.remove('is-blocked')
    })
})