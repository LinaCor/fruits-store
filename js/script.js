const VALID_SYMBOLS = /^[а-яa-z]+$/i;
const basket = document.querySelectorAll('.open-basket');
const bckgrndPopup = document.querySelector('.popup-mask');
const formOrder = document.querySelector('.popup-form');
const formCloseBtn = document.querySelectorAll('.close-form');
const sendForm = document.querySelector('.popup-form__form');
const popupThanks = document.querySelector('.popup-order');
const testInput = document.querySelector('.test input');
const inputNameValue = document.querySelector('.popup-form__form input[name="username"]');

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
  return validate = arr.every((el) => { return VALID_SYMBOLS.test(el); });
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

for (let btn of formCloseBtn) {
  btn.addEventListener('click', closeBasketModal);
}

sendForm.addEventListener('submit', (evt) => {
  const form = evt.currentTarget;
  evt.preventDefault();

  if (validateInputName()) {
    formOrder.classList.add('visually-hidden');
    popupThanks.classList.remove('visually-hidden');
    form.reset();
  } else {
    inputNameValue.style.border = '2px solid red';
  }
});

inputNameValue.addEventListener('input', () => {
  if (validateInputName()) {
    inputNameValue.style.border = '1px solid #000';
  }
});