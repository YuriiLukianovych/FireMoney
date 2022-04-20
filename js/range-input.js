
const rangeList = document.querySelectorAll('input[type="range"]');
const labelList = document.querySelectorAll('.range__label');
const rangeProgressList = document.querySelectorAll('.range__progress');

const calculatorStartSum = document.querySelector('.calc-start-sum');
const calculatorFinishSum = document.querySelector('.calc-finish-sum');
const calculatorDate = document.querySelector('.calc-date');
const calculatorPayment = document.querySelector('.calc-payment');

// Якщо користувач використовує браузер Firefox, то приховувати для нього блок .range-progress
// Поверх нього не можливо поставити дефолтний повзунок(thumb) у Firefox
// Для прогрес-лінії в input:range у Firefox(-moz) існує псевдоелемент ::-moz-range-progress
// Саме відсутність такого псевдоелемента для -webkit змушує робити кастомний прогрес .range-progress
if (navigator.userAgent.indexOf('Firefox') !== -1) {
    rangeProgressList.forEach(el => {
        el.style.display = 'none';
    })
}

rangeList.forEach(range => {
    range.addEventListener('input', e => {
    
    // визначає, яким з 2-ох інпутів рухають (у фокусі)
    let rangeNumber = +e.target.getAttribute('data-range');
    
    /* thumb-position = (value - min) / (max - min) * 100% */
    let thumbPosition = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;
    
    // В залежності від вибраного значення value
    // 1. Встановлюємо ширину для кастомного .range-progress 
    // rangeProgress.style.width = `${e.target.value / e.target.max * 100}%`;
    rangeProgressList.forEach(rangeProgress => {
        if(+rangeProgress.getAttribute('data-range') === rangeNumber){
            rangeProgress.style.width = `${thumbPosition}%`;
        }
    })
    

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
                        label.lastElementChild.textContent = 'дня';
                break;
                
                case "4":
                        label.lastElementChild.textContent = 'дня';
                break;

                default:
                label.lastElementChild.textContent = 'дней';
                }
            }
        })
        // ------------------------------- CALCULATOR --------------------------------

            // calculatorStartSum
            calculatorStartSum.textContent = `${rangeList[0].value} грн`;

            // calculatorFinishSum
            let finishSumm = +rangeList[0].value;
            console.log(typeof finishSumm);
            for (let i = 1; i <= +rangeList[1].value; i++) {
                console.log(i);
                finishSumm = finishSumm + finishSumm*0.01;
                console.log(finishSumm);
            }
            calculatorFinishSum.textContent = `${Math.trunc(finishSumm)} грн`;

            // calculatorDate
            const date = new Date();
            const endDate = date.getTime() + +rangeList[1].value*24*60*60*1000;
            const date2 = new Date(endDate);
            const MONTHS = {
                0: 'января',
                1: 'февраля',
                2: 'марта',
                3: 'апреля',
                4: 'мая',
                5: 'июня',
                6: 'июля',
                7: 'августа',
                8: 'сентября',
                9: 'октября',
                10: 'ноября',
                11: 'декабря'
            }
            calculatorDate.textContent = `${date2.getUTCDate()} ${MONTHS[date2.getUTCMonth()]} ${date2.getUTCFullYear()}`;

            // calculatorPayment
            calculatorPayment.textContent = `${Number.parseInt(calculatorFinishSum.textContent) - Number.parseInt(calculatorStartSum.textContent)} грн`;
})
})