export default function ImagePopup({onClose, card}) {
    return (
        <section className={`popup popup_image-open" 
            id="popup-image"
            ${card ? "popup_opened" : ""}`}>
        <figure className="popup__container popup__container_image">
          <button className="popup__close popup__close_image"  onClick={onClose} type="button"></button>
          <img className="popup__image" 
            src={card?.link} 
            alt={card?.name} 
          />
          <figcaption className="popup__title popup__title_image-title">{card?.name}</figcaption>
        </figure>
      </section>
    );
}