 


// (function () {
//   let button = document.querySelector('#toggle');
//   let menu = document.querySelector('#overlay');
//   let body = document.querySelector('body');
//   let toggleMenu = function () {
//     button.classList.toggle('button_container--active');
//     menu.classList.toggle('overlay--open');
//     body.classList.toggle('body-active-menu');
//   }
//   button.addEventListener('click', toggleMenu);
// })();



let menuOpenBurger = (function (options) {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.overlay);
  let body = document.querySelector('body');

  const _closeMenu = function () {
    button.classList.toggle('button_container--active');
  }

  let toggleMenu = function () {
    button.classList.toggle('button_container--active');
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }


  let addListeners = function () {
    button.addEventListener('click', toggleMenu);
  };

  return {
    init: addListeners,
    toggle: toggleMenu,
  };

})({ button: '#toggle', overlay: '#overlay' });


console.log(menuOpenBurger);
menuOpenBurger.init();

// setTimeout(menuOpenBurger.init, 3000);



// setTimeout(menuOpenBurger.toggle, 1000)





/**
 * Вариант с отдельной кнопкой закрытия
 */
// let menu = (function(options) {

//   let buttonOpen = document.querySelector(options.buttonOpen);
//   let buttonClose = document.querySelector(options.buttonClose);
//   let menu = document.querySelector(options.menu);
//   let body = document.querySelector('body');

//   let _toggleMenu = function(e) {
//     menu.classList.toggle('overlay--open');
//     body.classList.toggle('body-active-menu');
//   }

//   let addListeners = function() {
//     buttonOpen.addEventListener('click', _toggleMenu);
//     //тут используем делигирование для закрытия меню по клику на пункты меню
//     buttonClose.addEventListener('click', _toggleMenu);
//   }

//   return {
//     open: addListeners
//   };
// })({
//   buttonOpen: '#open',
//   buttonClose: '#close',
//   menu: '#overlay'
// });

// menu.open();

// console.log(menu)