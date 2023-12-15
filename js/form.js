const VALID_SYMBOLS = /^[а-яa-z]+$/i;
const basket = document.querySelectorAll('.open-basket');
const bckgrndPopup = document.querySelector('.popup-mask');
const formOrder = document.querySelector('.popup-form');
const sendForm = formOrder.querySelector('.popup-form__form');
const inputNameValue = formOrder.querySelector('.popup-form__form input[name="username"]');
const basketList = formOrder.querySelector('.popup-form__fruits');
const formCloseBtns = document.querySelectorAll('.close-form');
const popupThanks = document.querySelector('.popup-order');
const fruitPriceBtns = Array.from(document.querySelectorAll('.fruits__item button'));
const arrPrice = fruitPriceBtns.map((el) => { return el.textContent });


const isKeyEscape = (evt) => evt.key === 'Escape';

const onEscPress = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault();
    closeBasketModal();
  }
};

const onClickOutsideBasket = (evt) => {
  if (evt.target.classList.contains('popup-mask')) {
    closeBasketModal();
  }
};

const validateInputName = () => {
  const arr = inputNameValue.value.split(' ');
  return arr.every((el) => { return VALID_SYMBOLS.test(el); });
}

function openBasketModal() {
  formOrder.classList.remove('visually-hidden');
  bckgrndPopup.classList.remove('visually-hidden');
  document.addEventListener('keydown', onEscPress);
  document.addEventListener('click', onClickOutsideBasket);
}

function closeBasketModal() {
  formOrder.classList.add('visually-hidden');
  bckgrndPopup.classList.add('visually-hidden');
  popupThanks.classList.add('visually-hidden');
  document.removeEventListener('keydown', onEscPress);
  document.removeEventListener('click', onClickOutsideBasket);
}

for (let bsk of basket) {
  bsk.addEventListener('click', openBasketModal);
}

for (let btn of formCloseBtns) {
  btn.addEventListener('click', closeBasketModal);
}

sendForm.addEventListener('submit', (evt) => {
  const form = evt.currentTarget;
  evt.preventDefault();

  if (validateInputName()) {
    formOrder.classList.add('visually-hidden');
    popupThanks.classList.remove('visually-hidden');
    form.reset();
    basketList.innerHTML = '';
    for (let i = 0; i < fruitPriceBtns.length; i++) {
      fruitPriceBtns[i].textContent = arrPrice[i];
    }
  } else {
    inputNameValue.style.border = '2px solid red';
  }
});

inputNameValue.addEventListener('input', () => {
  if (validateInputName()) {
    inputNameValue.style.border = '1px solid #000';
  }
});