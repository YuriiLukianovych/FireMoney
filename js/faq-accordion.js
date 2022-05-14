const btnList = document.querySelectorAll('.faq__btn');

btnList.forEach(btn => {
   btn.addEventListener('click', e => {
      toggle(e.currentTarget.parentNode, 500); // main function !!!
   });
});

function show(el, duration) {
   const elBody = el.querySelector('.faq__text');
   const btn = el.querySelector('.faq__btn');
   const title = el.querySelector('.faq__title');
   if (
      elBody.classList.contains('collapsing') ||
      el.classList.contains('show')
   ) {
      return;
   }
   elBody.style['display'] = 'block';
   const height = elBody.offsetHeight;
   elBody.style['height'] = 0;
   elBody.style['overflow'] = 'hidden';
   elBody.style['transition'] = `height ${duration}ms ease`;
   elBody.classList.add('collapsing');
   el.classList.add('faq__item--open');
   btn.classList.add('faq__btn--open');
   title.classList.add('faq__title--open');
   elBody.offsetHeight;
   elBody.style['height'] = `${height}px`;
   window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      el.classList.add('show');
      // el.classList.add('faq__item--open');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
   }, duration);
}
function hide(el, duration) {
   const elBody = el.querySelector('.faq__text');
   const btn = el.querySelector('.faq__btn');
   const title = el.querySelector('.faq__title');
   if (
      elBody.classList.contains('collapsing') ||
      !el.classList.contains('show')
   ) {
      return;
   }
   elBody.style['height'] = `${elBody.offsetHeight}px`;
   elBody.offsetHeight;
   elBody.style['display'] = 'block';
   elBody.style['height'] = 0;
   elBody.style['overflow'] = 'hidden';
   elBody.style['transition'] = `height ${duration}ms ease`;
   elBody.classList.remove('collapse');
   el.classList.remove('show');
   el.classList.remove('faq__item--open');
   btn.classList.remove('faq__btn--open');
   title.classList.remove('faq__title--open');
   elBody.classList.add('collapsing');
   window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      // el.classList.remove('faq__item--open');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
   }, duration);
}
function toggle(el, duration) {
   el.classList.contains('show') ? hide(el, duration) : show(el, duration);
}
