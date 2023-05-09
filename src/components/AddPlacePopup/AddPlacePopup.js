import { useRef } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const nameCard = useRef('')
    const linkCard = useRef('')

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: nameCard.current.value,
            link: linkCard.current.value,
        })
    }

    
    return (
        <PopupWithForm
            isOpen={isOpen}
            name={`popup__input-info_add-card`}
            title={`Новое место`}
            textButton={`Создать`}
            onClose={onClose}
            onSubmit={handleSubmit}
          >
            <input
              className="popup__info popup__info_type_place"
              id="place"
              minLength="2"
              maxLength="30"
              type="text"
              name="name"
              form="form-place"
              placeholder="Название"
              required
              ref={nameCard}
            />
            <span className="popup__error place-error" id="place-error" />
            <input
              className="popup__info popup__info_type_link"
              id="url-place"
              type="url"
              name="link"
              form="form-place"
              placeholder="Ссылка на картинку"
              required
              ref={linkCard}
            />
            <span
              className="popup__error url-place-error"
              id="url-place-error"
            />
          </PopupWithForm>
    )
}