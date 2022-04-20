// const rangeProgress = document.querySelector('.range-progress');
const rangeList = document.querySelectorAll('input[type="range"]');
const labelList = document.querySelectorAll('.range__label');

// Якщо користувач використовує браузер Firefox, то приховувати для нього блок .range-progress
// Поверх нього не можливо поставити дефолтний повзунок(thumb) у Firefox
// Для прогрес-лінії в input:range у Firefox(-moz) існує псевдоелемент ::-moz-range-progress
// Саме відсутність такого псевдоелемента для -webkit змушує робити кастомний прогрес .range-progress
// if (navigator.userAgent.indexOf('Firefox') !== -1) {
//     rangeProgress.style.display = 'none';
// }

rangeList.forEach(range => {
    range.addEventListener('input', e => {
    
    // визначає, яким з 2-ох інпутів рухають (у фокусі)
    let rangeNumber = +e.target.getAttribute('data-range');
    
    /* thumb-position = (value - min) / (max - min) * 100% */
    let thumbPosition = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;
    
    // В залежності від вибраного значення value
    // 1. Встановлюємо ширину для кастомного .range-progress 
    // rangeProgress.style.width = `${e.target.value / e.target.max * 100}%`;
    

    // 2. Вираховуємо позицію для мітки .range-label
        labelList.forEach(label => {
            if (+label.getAttribute('data-range') === rangeNumber) {
                
                label.firstElementChild.textContent = `${e.target.value}`;
                if (thumbPosition < 20) {
                    label.style.left = '40px';
                } else if(thumbPosition > 85){
                    label.style.left = 'calc(100% - 55px)';
                } else {
                    label.style.left = `${thumbPosition}%`;
                }
            }
            // Обробляє правильне відмінювання слова "день" для різних значень діапазону 2-го інпута
            if (+label.getAttribute('data-range') === 2) {
                switch (e.target.value) {
                case "3":
                        label.lastElementChild.textContent = 'дні';
                break;
                
                case "4":
                        label.lastElementChild.textContent = 'дні';
                break;

                default:
                label.lastElementChild.textContent = 'днів';
                }
            }
        })
})
})
