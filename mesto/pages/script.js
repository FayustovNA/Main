
//Открыть и закрыть popUp
let buttonAdd = document.querySelector('.profile__button-add');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelectorAll('.popup__button-close');
let popUp = document.querySelector('.popup');
let popUpEl = document.querySelector('.popup-el');

function openPopUp(button) {
    button.classList.add('popup_opened');
}
buttonAdd.addEventListener('click', function () { openPopUp(popUpEl) });
buttonEdit.addEventListener('click', function () { openPopUp(popUp) });

function closePopUp(button) {
    button.classList.remove('popup_opened');
}

buttonClose.forEach(button => {
    button.addEventListener('click', () => {
        closePopUp(popUpEl);
        closePopUp(popUp);
    })
});


//Добавить карточку и лайк
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elementsContainer = document.querySelector('.elements');
const buttonCreateElement = popUpEl.querySelector('.popup__button-save');
const buttonLike = document.querySelectorAll('.element__like');


function addElement(maskValue, titleValue) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementNew = elementTemplate.querySelector('.element').cloneNode(true);
    elementNew.querySelector('.element__mask').src = maskValue;
    elementNew.querySelector('.element__title').textContent = titleValue;
    elementNew.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-active ');
    });
    elementsContainer.append(elementNew);
};


buttonCreateElement.addEventListener('click', function () {
    const mask = popUpEl.querySelector('.popup__form-pic');
    const title = popUpEl.querySelector('.popup__form-name');

    addElement(mask.value, title.value);
}
);



//Редактировать профиль
const formElement = popUp.querySelector('.popup__forma');
const nameInput = formElement.querySelector('.popup__form-name');
const jobInput = formElement.querySelector('.popup__form-specialization');

function formSubmitHandler(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name-first').textContent = nameInput.value;
    document.querySelector('.profile__specialization').textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);


