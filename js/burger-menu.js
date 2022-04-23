const menu = document.querySelector('[data-menu]');
const menuList = document.querySelector('[data-menu-list]');
const menuBtn = document.querySelector('[data-menu-button]');
const linksList = document.querySelectorAll('[data-link]');

//відкриття\закриття мобільного меню по кліку на бургер-кнопку
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
    menuBtn.classList.toggle('is-open')
    document.body.classList.toggle('is-blocked')
})

// закриття мобільного меню при кліку на елемент меню 
linksList.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show')
        menuBtn.classList.remove('is-open')
        document.body.classList.remove('is-blocked')
    })
})

// закриття мобільного меню при кліку мимо мобільного меню
window.addEventListener('click', e => {
    if (!e.target.closest('#menu-container')
        && !e.target.closest('[data-menu-button]')
        && !e.target.closest('[data-link]')) {
            menu.classList.remove('show')
            menuBtn.classList.remove('is-open')
            document.body.classList.remove('is-blocked')
    }
})