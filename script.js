const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const product = document.querySelector('#products');

let currentRight = 0;

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();

if (currentRight <970){
currentRight+=980;
products.style.right = `${currentRight}px`;

} else return;
});

leftBtn.addEventListener("click", (e) => { 
  e.preventDefault();

  let currentLeft = 0;

  if (currentLeft < 970){
    currentLeft+= - 980;
    products.style.left = `${currentLeft}px`;
    
    } else return;
});


(function () {
    let button = document.querySelector('#hamburger');
    let menu = document.querySelector('#overlay');
    let body = document.querySelector('body');
    let linkAll = document.querySelectorAll('.overlay-menu__link');
    
    let hamburgerMenu = function () {
      button.classList.toggle('hamburger__plank--active');
      menu.classList.toggle('overlay--open');
      body.classList.toggle('body-active-menu');
    }
    button.addEventListener('click', hamburgerMenu);

      for(let i = 0; i < linkAll.length; i++) {
          const currentLink = linkAll[i];
          currentLink.addEventListener('click', hamburgerMenu);  
      }
  })();

   const findBlockByAlias = (alias) => {
     return $(".reviews__display").filter((index,item) => {
       return $(item).attr("data-open-with")=== alias;

     });
   };

  $(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
  });

  


  
  
  
