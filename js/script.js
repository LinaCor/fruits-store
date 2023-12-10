const basket = document.querySelectorAll('.open-basket');
const bckgrndPopup = document.querySelector('.popup-mask');
const formOrder = document.querySelector('.popup-form');
const formCloseBtn = document.querySelectorAll('.close-form');
const sendForm = document.querySelector('.popup-form__form');
const popupThanks = document.querySelector('.popup-order');
const testInput = document.querySelector('.test input');

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
  evt.preventDefault();
  formOrder.classList.add('visually-hidden');
  popupThanks.classList.remove('visually-hidden');
})
