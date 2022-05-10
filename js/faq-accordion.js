const btnList = document.querySelectorAll('.faq__btn');

// акордеон
btnList.forEach(btn => {
   btn.addEventListener('click', e => {
      btn.classList.toggle('faq__btn--open');
      e.target.previousElementSibling.classList.toggle('faq__text--visible');
      e.target.parentNode.classList.toggle('faq__item--open');
      e.target.previousElementSibling.previousElementSibling.classList.toggle(
         'faq__title--open',
      );
   });
});
