/* MENU RESPONSIVE */
const menuBtn = document.querySelector('#menu');
const navLinks = document.querySelector('#navLinks');

menuBtn.addEventListener('click',()=>{
	navLinks.classList.toggle('mobile-menu')
});



/* PROPAGANDA CELULAR*/
let body = document.querySelector('body');
let slide = document.querySelector('#caja-ropa');
let widthWindow = body.clientWidth;
let widthBox = slide.clientWidth;
let widDif = widthWindow - widthBox;
let width = slide.clientWidth + widDif;
let slider = document.querySelector('#slider-propaganda').animate([
   // keyframes
   { transform: 'translateX(0px)' },
   { transform: 'translateX(' + -(width * 8) + 'px)' }
 ], {
   // timing options
   duration: 12000,
   iterations: Infinity
 });


document.querySelector('#slider-propaganda').addEventListener('touchstart', () => {
  slider.pause();
});

document.querySelector('#slider-propaganda').addEventListener('touchend', () => {
  slider.play();
});


/* PROPAGANDA ESCRITORIO */
if (widthWindow >= 900) {
  let slider = document.querySelector('#slider-propaganda').animate([
   // keyframes
   { transform: 'translateX(0px)' },
   { transform: 'translateX(' + -(((widthBox + 100) * 16) / 2) + 'px)' }
 ], {
   // timing options
   duration: 8000,
   iterations: Infinity
 });
};


/* SLIDER DESTACADO | NUEVOS INGRESOS |LIQUIDACION*/ 
if (widthWindow < 900) {
  let swiper = new Swiper('.swiper',{

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
}












