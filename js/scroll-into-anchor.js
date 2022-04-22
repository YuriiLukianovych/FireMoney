const anchors = document.querySelectorAll('[data-link]')
console.log(anchors)

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


for (let anchor of anchors) {
  anchor.addEventListener('click', e => {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    const ourElem = document.querySelector(blockID)
    
    const blockIDcoords = getCoords(ourElem);

    
    window.scrollTo({
    top: blockIDcoords.top - 70, // мінус висота хедера, який фіксований і перекриває початок секції
    behavior: "smooth"
    })
  })
}