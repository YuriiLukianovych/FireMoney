const linksHeader = document.querySelectorAll('[data-link]');
const linksFooter = document.querySelectorAll('[data-link-2]');
const anchors = [...linksHeader, ...linksFooter];
const header = document.querySelector('.header');

// получаем координаты элемента в контексте документа
function getCoords(elem) {
   let box = elem.getBoundingClientRect();

   return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset,
   };
}

// визначаэмо висоту хедера
const headerHeight = getCoords(header).bottom - getCoords(header).top;

// функція визначення поточної позиції Y на сторінці
const scrollPosition = () =>
   window.pageYOffset || document.documentElement.scrollTop;

for (let anchor of anchors) {
   anchor.addEventListener('click', e => {
      e.preventDefault();
      // отримати значення атрибута href(там id секції) посилання, по якому відбувся клік
      const blockID = anchor.getAttribute('href');
      // отримати достув в DOM до елемента по отриманому id
      const ourElem = document.querySelector(blockID);
      // отримати його координати
      const blockIDcoords = getCoords(ourElem);

      const COORDS =
         scrollPosition() > blockIDcoords.top // істина, коли скролл буде вверх (отже покажеться хедер, див. smart-header.js)
            ? blockIDcoords.top - headerHeight
            : blockIDcoords.top;
      window.scrollTo({
         top: COORDS, // якщо хедер выдображений(був скролл вгору), то мінус висота хедера, який фіксований і перекриває початок секції
         behavior: 'smooth', // плавний скролл
      });
   });
}
