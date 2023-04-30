function PopupWithForm({ isOpen, onClose, name, title, textButton, children }) {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form className="" id="" name={name} noValidate>
          <button
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <div className="popup__content">
            <h2 className="popup__title">{title}</h2>
            {children}
            <button className="popup__button" type="submit">
              <p className="popup__button-text">{textButton}</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
