// function InfoTooltipSuccess() {
//   return(

//   );
// }

// function InfoTooltipError() {
//   return(
//     <div className="popup__container popup-info-tooltip">
//           <div className="popup-tooltip__icon">
//           </div>
//           <p popup-tooltip__title>Что то пошло не так</p>
//         </div>
//   );
// }

export default function InfoTooltip({ isOpen, onClose, message, showIcon }) {
  return (
    <section
      className={`popup popup-tooltip ${isOpen && "popup_opened"}`}
      onClose={onClose}
      id="popup-tooltip"
    >
      <div className="popup-tooltip__container">
        <button
          className="popup-tooltip__button-close"
          onClick={onClose}
          type="button"
        ></button>
        <div className="popup-tooltip__image-container">
          <img src={showIcon} alt="icon's message" />
        </div>
        <p className="popup-tooltip__title">{message}</p>
      </div>
    </section>
  );
}
