const handleClickBurger = () => {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    body.classList.toggle('lock');
  }
  
  document.addEventListener('click', handleClickBurger);