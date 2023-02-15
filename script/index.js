//Код открытия попапа по нажатию на кнопку edit- button
const popupEditButton = document.querySelector('.kusto__edit-button'); //нахожу в обработчике кнопку, с которой работаю
const overlay = document.querySelectorAll('.overlay-form'); //оверлэй, который буду менять
const popup = document.querySelectorAll('.popup'); //форма, которую буду менять
const editPopup = document.querySelector('.edit-popup');
const editOverlay = document.querySelector('.edit-overlay');
const buttonSave = document.querySelector('.form__save');
const editPopupClose = document.querySelector('.edit-close');
const addPopupClose = document.querySelector('.add-close');
const titleElem = document.querySelector('.kusto__title');
const subtitleElem = document.querySelector('.kusto__subtitle');
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const inputName = document.querySelector('.form__input_name');
const inputInfo = document.querySelector('.form__input_info');
const formError = formElement.querySelector(`.${formInput.id}-error`);
const popupAddButton = document.querySelector('.kusto__add-button'); //нахожу в обработчике кнопку, с которой работаю
const addPopup = document.querySelector('.add-popup');
const addOverlay = document.querySelector('.add-overlay');
const createNewItem = document.querySelector('.item-create');
const inputImageName = document.querySelector('.form__field_image-name');
const inputImage = document.querySelector('.form__field_url');
const cards = [
    {
        name: 'Архыз',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        imageUrl: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const containerGrid = document.querySelector('.photo-grid');
console.log(containerGrid)
console.log(formInput)

//создаю функцию, которая будет менять классы оверлэя и попапа
function openPopup(overlay, popup) {
    overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
    popup.classList.add('popup_open'); //добавил открытый попап
}

function closePopup(overlay, popup) {
    overlay.classList.remove('overlay-form_open');
    popup.classList.remove('popup_open');
}
// Код сохранения информации в блок кусто профиль инфо

function save(evt) {
    evt.preventDefault();
    titleElem.textContent = inputName.value;
    subtitleElem.textContent = inputInfo.value;
    editOverlay.classList.remove('overlay-form_open'); //закрыть оверлэй
    editPopup.classList.remove('popup_open'); //закрыть попап
}

function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-grid__item');
    const cardImage = document.createElement('img');
    cardImage.src = card.imageUrl;
    cardImage.classList.add('photo-grid__image');
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('photo-grid__delete');
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('photo-grid__info');
    const cardTitle = document.createElement('p');
    cardTitle.textContent = card.name;
    cardTitle.classList.add('photo-grid__title');
    const overlayItem = document.querySelector('.item-overlay');
    const imagePopup = document.querySelector('.popup_image');
    const imagePopupTitle = imagePopup.querySelector('.popup__title');
    const imagePopupClose = imagePopup.querySelector('.image-close');
    const imagePopupImage = imagePopup.querySelector('.popup__image');
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardInfo);
    cardInfo.appendChild(cardTitle);
    cardElement.appendChild(buttonDelete);
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('photo-grid__like-button');
    const imageLike = document.createElement('img');
    imageLike.src = 'images/like.svg';
    imageLike.classList.add('photo-grid__like');
    cardInfo.appendChild(buttonLike);
    buttonLike.appendChild(imageLike);


    function deleteItem() {
        cardElement.remove();
    }

    function like() {
        imageLike.classList.toggle('photo-grid__like_black');
    }

    function openImageItem(overlay, imagePopup) {
        overlay.classList.add('overlay-form_open'); //добавил оверлэй при открытом попап
        imagePopup.classList.add('popup_image');
        imagePopupTitle.textContent = card.name;
        imagePopupImage.src = cardImage.src;
    }

    buttonLike.addEventListener('click', like);
    buttonDelete.addEventListener('click', deleteItem);

    cardImage.addEventListener('click', function () {
        openImageItem(overlayItem, imagePopup);
    });

    imagePopupClose.addEventListener('click', function () {
        closePopup(overlayItem, imagePopup)
    }); //связал команду клик и функцию замены классов по клику

    return cardElement;
}

const showInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    formError.classList.add('form__input-error_active');
    
  };

const hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    formError.classList.remove('form__input-error_active');
    
  };
// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement,inputElement);
    } else {
      // Если проходит, скроем
      console.log(inputElement)
      hideInputError(formElement, inputElement);
    }
  };
  console.log(inputInfo)
  const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement)
        console.log(inputElement)
      });
    });
  }; 
  const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
    });
  };
  
  // Вызовем функцию
  enableValidation();
  // Вызовем функцию isValid на каждый ввод символа
// formInput.addEventListener('input', isValid); 
// inputInfo.addEventListener('input', isValid); 


popupEditButton.addEventListener('click', function () {
    openPopup(editOverlay, editPopup)

}); //связал команду клик и функцию замены классов по клику
editPopupClose.addEventListener('click', function () {
    closePopup(editOverlay, editPopup)
}); //связал команду клик и функцию замены классов по клику

popupAddButton.addEventListener('click', function () {
    openPopup(addOverlay, addPopup)
}); //связал команду клик и функцию замены классов по клику

addPopupClose.addEventListener('click', function () {
    closePopup(addOverlay, addPopup)
}); //связал команду клик и функцию замены классов по клику

buttonSave.addEventListener('click', save);

//функция добавление лайка и удаления карточек
cards.forEach(card => {
    const cardElement = createCard(card);
    containerGrid.appendChild(cardElement);
}
);


createNewItem.addEventListener('click', function create(evt) {
    evt.preventDefault();
    const cardElement = createCard({ name: inputImageName.value, imageUrl: inputImage.value });
    containerGrid.prepend(cardElement);
    closePopup(addOverlay, addPopup);
});

