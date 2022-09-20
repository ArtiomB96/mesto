let buttonElem = document.querySelector ('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
let overlay = document.querySelector ('.overlay-form'); //оверлэй, который буду менять
let popup = document.querySelector ('.edit-form'); //форма, которую буду менять
console.log(buttonElem) 
console.log(overlay)
console.log(popup)
//создаю функцию, которая будет менять классы оверлэя и попапа
let onButtonClick = function () {
    overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.add('edit-form_open'); //добавил открытый попап
    
}
buttonElem.addEventListener('click', onButtonClick); //связал команду клик и функцию замены классов по клику


// let popup = document.querySelector('.edit-form');

// buttonElem.addEventListener('click', () => {
//   form.classList.add('overlay-form');
  
// });
