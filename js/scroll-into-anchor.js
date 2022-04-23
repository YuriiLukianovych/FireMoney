const linksHeader = document.querySelectorAll('[data-link]')
const linksFooter = document.querySelectorAll('[data-link-2]')
const anchors = [...linksHeader, ...linksFooter];
const header = document.querySelector('.header');

// получаем координаты элемента в контексте документа
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

// визначаэмо висоту хедера
const headerHeight = getCoords(header).bottom - getCoords(header).top;

for (let anchor of anchors) {
  anchor.addEventListener('click', e => {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    const ourElem = document.querySelector(blockID)
    
    const blockIDcoords = getCoords(ourElem);

    
    window.scrollTo({
    top: blockIDcoords.top - headerHeight, // мінус висота хедера, який фіксований і перекриває початок секції
    behavior: "smooth"
    })
  })
}