import { useState } from 'react';
import logo from '../images/Logo_mesto.svg';
import '../index.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };
  return (
    <div className="page">
      <Header logo = {logo} />
      <Main 
        handleEditAvatarClick = {() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
        handleEditProfileClick = {() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
        handleAddPlaceClick = {() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
        handleCardClick = {(card) => setSelectedCard(card)}
      />
      <Footer />
      <PopupWithForm
            isOpen = {isEditAvatarPopupOpen}
            name = {`popup-edit-avatar`}
            title = {`Редактировать аватар?`}
            textButton = {`Сохранить`}
            onClose = {closeAllPopups}   
      >
          <input className="popup__info popup-edit-avatar__input" 
            id="url-avatar" type="url" name="name" 
            placeholder="Введите URL" required />
          <span className="popup__error url-avatar-error" id="url-avatar-error" />
      </PopupWithForm>
      <PopupWithForm
            isOpen = {isEditProfilePopupOpen}
            name = {`popup__input-info`}
            title = {`Редактировать профиль`}
            textButton = {`Сохранить`}
            onClose = {closeAllPopups}   
      >
          <input className="popup__info popup__info_type_name" 
              id="name" minLength="2" maxLength="40" 
              type="text" name="nameInput" 
              placeholder="Имя" required />
          <span className="popup__error name-error" id="name-error" />
          <input className="popup__info popup__info_type_job" 
              id="about" minLength="2" maxLength="200" 
              type="text" name="jobInput" 
              placeholder="О себе любимом" required />
          <span className="popup__error about-error" id="about-error" />
      </PopupWithForm>
           <PopupWithForm
            isOpen = {isAddPlacePopupOpen}
            name = {`popup__input-info_add-card`}
            title = {`Новое место`}
            textButton = {`Создать`}
            onClose = {closeAllPopups}
    
      >
          <input className="popup__info popup__info_type_place" 
              id="place" minLength="2" maxLength="30" 
              type="text" name="name"  form="form-place" 
              placeholder="Название" required />
          <span className="popup__error place-error" id="place-error" />
          <input className="popup__info popup__info_type_link" 
              id="url-place" type="url" 
              name="link" form="form-place" 
              placeholder="Ссылка на картинку" required />
          <span className="popup__error url-place-error" id="url-place-error" />
      </PopupWithForm>
      <ImagePopup
          onClose = {closeAllPopups}
          card = {selectedCard}
      />
      {/* попап удаления карточки */}
      <section className="popup" id="popup-delete-card">
        <div className="popup-delete-card">
          <button className="popup__close"></button>
          <h2 className="popup-delete-card__title">Вы уверены?</h2>
          <button className="popup-delete-card__button" type="button">
            <p className="popup-delete-card__subtitle">Да</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
