import React from 'react';


function PopupWithForm({ title, name, text, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${{ isOpen } && 'popup_opened'}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <h4 className="popup__title">{title}</h4>
        <form action="#" onSubmit={onSubmit} className="form" name='{name}' method="GET" noValidate>
          {children}
          <button onClick={onSubmit} type="submit" className="form__button" >{text}</button>
        </form>
      </div>

    </div>
  );
}
export default PopupWithForm;
