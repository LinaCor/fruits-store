const btnMenuBurger = document.querySelector('.menu-burger');
const menuBurger = document.querySelector('.mobile');

btnMenuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('visually-hidden');
  if (!menuBurger.classList.contains('visually-hidden')) {
    document.body.style.position = 'fixed';
  } else {
    document.body.style.removeProperty('position');
  }
})

menuBurger.addEventListener('click', (evt) => {
  if (evt.target.closest('.mobile__nav')) {
    menuBurger.classList.add('visually-hidden');
    document.body.style.removeProperty('position');
  }
})