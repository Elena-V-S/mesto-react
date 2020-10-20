import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onUpdateCard}) {
    const linkRef = React.useRef();
    const nameRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateCard({
            name: nameRef.current.value,
            link: linkRef.current.value, 
        });
    }
      
    return (
        <PopupWithForm 
      title={'Новое место'} 
      name={'new-card'} 
      text={'Создать'} 
      children={
          <>
            <label className="form__label">
                <input id="place-input" ref={nameRef} type="text" className="form__input form__input_type_place" name="name" placeholder="Название" minLength="1" maxLength="30" required/>
                <span id="place-input-error" className="form__input-error form__input-error_active"></span>
            </label> 
            <label className="form__label">
                <input id="link-input" ref={linkRef} type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на картинку" required/>
                <span id="link-input-error" className="form__input-error form__input-error_active"></span>
            </label> 
            </>
      } 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}/>
    )
}

export default AddPlacePopup;