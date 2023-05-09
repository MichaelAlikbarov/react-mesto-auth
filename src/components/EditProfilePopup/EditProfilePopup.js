import { useState, useContext, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      isOpen={isOpen}
      name={`popup__input-info`}
      title={`Редактировать профиль`}
      textButton={`Сохранить`}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__info popup__info_type_name"
        id="name"
        minLength="2"
        maxLength="40"
        type="text"
        name={name}
        placeholder="Имя"
        required
        onChange={handleNameChange}
      />
      <span className="popup__error name-error" id="name-error" />
      <input
        className="popup__info popup__info_type_job"
        id="about"
        minLength="2"
        maxLength="200"
        type="text"
        name={description}
        placeholder="О себе любимом"
        required
        onChange={handleDescriptionChange}
      />
      <span className="popup__error about-error" id="about-error" />
    </PopupWithForm>
  );
}
