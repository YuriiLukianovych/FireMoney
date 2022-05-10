// Скрипт для вставки актуальної дати повернення кредиту (відносно поточної дати, коли користувач переглядає сайт)
// у секції .best-deal

const dateLite = document.querySelector('[data-date-lite]');
const dateBasic = document.querySelector('[data-date-basic]');
const datePro = document.querySelector('[data-date-pro]');

document.addEventListener('DOMContentLoaded', () => {
   // Структура сторінки загружена і готова до взаємодії

   // визначаємо поточну дату
   const date = new Date();

   // визначаємо дату повернення
   //lite, через 7 днів
   const liteMs = date.getTime() + 7 * 24 * 60 * 60 * 1000; // мілісекунд
   const liteDate = new Date(liteMs);

   //basic, через 30 днів
   const basicMs = date.getTime() + 30 * 24 * 60 * 60 * 1000; // мілісекунд
   const basicDate = new Date(basicMs);

   //pro, через 365 днів
   const proMs = date.getTime() + 365 * 24 * 60 * 60 * 1000; // мілісекунд
   const proDate = new Date(proMs);

   // об'єкт з назвами місяців для виведення в html-розмітку
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
      11: 'декабря',
   };

   // виводимо дату повернення кредиту в html-розмітку
   // lite
   dateLite.textContent = `${liteDate.getUTCDate()} ${
      MONTHS[liteDate.getUTCMonth()]
   } ${liteDate.getUTCFullYear()}`;

   // basic
   dateBasic.textContent = `${basicDate.getUTCDate()} ${
      MONTHS[basicDate.getUTCMonth()]
   } ${basicDate.getUTCFullYear()}`;

   // pro
   datePro.textContent = `${proDate.getUTCDate()} ${
      MONTHS[proDate.getUTCMonth()]
   } ${proDate.getUTCFullYear()}`;
});
