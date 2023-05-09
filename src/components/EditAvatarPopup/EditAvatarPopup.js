import { useRef, } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentAvatar = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: currentAvatar.current.value,
    });
  }
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      name={`popup-edit-avatar`}
      title={`Редактировать аватар?`}
      textButton={`Сохранить`}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__info popup-edit-avatar__input"
        id="url-avatar"
        type="url"
        name="name"
        placeholder="Введите URL"
        required
        ref={currentAvatar}
      />
      <span className="popup__error url-avatar-error" id="url-avatar-error" />
    </PopupWithForm>
  );
}
