const formOrder = document.querySelector('.popup-form');
const basketList = formOrder.querySelector('.popup-form__fruits');
const leftBtnForm = formOrder.querySelector('.popup-form__order-left-btn');
const rightBtnForm = formOrder.querySelector('.popup-form__order-right-btn');
const fruitTemplate = document.querySelector('#fruit').content.querySelector('.popup-form__fruits-item');
const fruitsBtns = document.querySelectorAll('.fruits__item button');
const closeFruitCards = document.querySelectorAll('.popup-form__contect-btn');
const formSubmit = document.querySelector('.popup-order');
let appendFruits = [];
let appendFruitsMax = [];


const drawFruitCards = (arr) => {
  basketList.innerHTML = '';
  appendFruitsMax = Array.from(arr).slice(0, 3);
  appendFruitsMax.forEach((el) => basketList.append(el));

  if (arr.length > 3) {
    leftBtnForm.classList.remove('visually-hidden');
    rightBtnForm.classList.remove('visually-hidden');
  } else {
    leftBtnForm.classList.add('visually-hidden');
    rightBtnForm.classList.add('visually-hidden');
  }
};


const addCheckHandler = (item, itemButton, price) => {
  let closeFruitCard = item.querySelector('.popup-form__contect-btn');
  closeFruitCard.addEventListener('click', function () {
    item.remove();
    appendFruits = appendFruits.filter(el => el !== item);
    basketList.innerHTML = '';
    drawFruitCards(appendFruits);
    itemButton.textContent = price;
    itemButton.disabled = false;
  });
};

for (let btn of fruitsBtns) {
  btn.addEventListener('click', (evt) => {
    const cardFruit = evt.target.closest('.fruits__item');
    const lastPrice = cardFruit.querySelector('button').textContent;
    const card = fruitTemplate.cloneNode(true);
    card.dataset.id = cardFruit.dataset.id;
    card.querySelector('.popup-form__contect h2').textContent = cardFruit.querySelector('h2').textContent;
    card.querySelector('.popup-form__contect p').textContent = cardFruit.querySelector('p').textContent;
    card.querySelector('.popup-form__contect-img img').src = cardFruit.querySelector('div img').src;
    card.querySelector('.popup-form__contect-img img').alt = cardFruit.querySelector('div img').alt;
    card.classList.add(cardFruit.classList.item(1));
    addCheckHandler(card, btn, lastPrice);
    appendFruits.push(card);
    btn.textContent = 'in basket!';
    btn.disabled = true;

    drawFruitCards(appendFruits);
  })
}


leftBtnForm.addEventListener('click', function () {
  let firstAppendFruitsMax = Number(appendFruitsMax[0].dataset.id);
  let firstAppendFruits = Number(appendFruits[0].dataset.id);
  let firstElem = appendFruits.findIndex(el => el.dataset.id === appendFruitsMax[0].dataset.id);

  if (!(firstAppendFruitsMax === firstAppendFruits)) {
    basketList.innerHTML = '';
    appendFruitsMax = Array.from(appendFruits).slice(firstElem - 3, firstElem);
    appendFruitsMax.forEach((el) => basketList.append(el));
  }
});


rightBtnForm.addEventListener('click', function () {
  let lastAppendFruitsMax = Number(appendFruitsMax[appendFruitsMax.length - 1].dataset.id);
  let lastAppendFruits = Number(appendFruits[appendFruits.length - 1].dataset.id);
  let lastElem = appendFruits.findIndex(el => el.dataset.id === appendFruitsMax[appendFruitsMax.length - 1].dataset.id);

  if (!(lastAppendFruitsMax === lastAppendFruits)) {
    basketList.innerHTML = '';
    appendFruitsMax = Array.from(appendFruits).slice(lastElem + 1, lastElem + 4);
    appendFruitsMax.forEach((el) => basketList.append(el));
  }
});














