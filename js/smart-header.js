let lastScroll = 0;
const header = document.querySelector('.header');
const defaultOffset = 100;

const scrollPosition = () =>
   window.pageYOffset || document.documentElement.scrollTop;
const isHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
   if (
      scrollPosition() > lastScroll &&
      !isHide() &&
      scrollPosition() > defaultOffset
   ) {
      // scroll down
      header.classList.add('hide');
   } else if (scrollPosition() < lastScroll && isHide()) {
      // scroll up
      header.classList.remove('hide');
   }

   if (scrollPosition() === 0 && !header.classList.contains('header__top')) {
      header.classList.add('header__top');
   }
   if (scrollPosition() > 400 && header.classList.contains('header__top')) {
      header.classList.remove('header__top');
   }

   lastScroll = scrollPosition();
});

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
