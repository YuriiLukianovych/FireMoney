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

   lastScroll = scrollPosition();
});
