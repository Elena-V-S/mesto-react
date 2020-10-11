import React from 'react';


function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_image ${{card} && 'popup_opened'}`}>
        <div className="popup-image__container">
            <button type="button" onClick={onClose} className="popup-image__close popup__close"></button>
            <figure className="popup-image__group">
                <img src={card.link} alt={card.alt} className="popup-image__img"/>
                <figcaption className="popup-image__description">
                    <h3 className="popup-image__title"></h3>
                </figcaption>
            </figure>
        </div>
    </div> 
  );
}

export default ImagePopup;