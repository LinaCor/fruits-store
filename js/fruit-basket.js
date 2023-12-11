const basketList = document.querySelector('.popup-form__fruits');
const fruitTemplate = document.querySelector('#fruit').content.querySelector('.popup-form__fruits-item');
const fruitsBtn = document.querySelectorAll('.fruits__item button');
const closeFruitCard = document.querySelectorAll('.popup-form__contect-btn');
const formSubmit = document.querySelector('.popup-order');

let addCheckHandler = function (item, itemButton, price) {
  let closeFruitCard = item.querySelector('.popup-form__contect-btn');
  closeFruitCard.addEventListener('click', function () {
    item.remove();
    itemButton.textContent = price;
    itemButton.disabled = false;
  });
};

for (let btn of fruitsBtn) {
  btn.addEventListener('click', (evt) => {
    const cardFruit = evt.target.closest('.fruits__item');
    const lastPrice = cardFruit.querySelector('button').textContent;
    const card = fruitTemplate.cloneNode(true);
    card.querySelector('.popup-form__contect h2').textContent = cardFruit.querySelector('h2').textContent;
    card.querySelector('.popup-form__contect p').textContent = cardFruit.querySelector('p').textContent;
    card.querySelector('.popup-form__contect-img img').src = cardFruit.querySelector('div img').src;
    card.querySelector('.popup-form__contect-img img').alt = cardFruit.querySelector('div img').alt;
    card.classList.add(cardFruit.classList.item(1));
    addCheckHandler(card, btn, lastPrice);
    basketList.append(card);

    btn.textContent = 'in basket!';
    btn.disabled = true;
  })
}

