import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value , /* Значение инпута, полученное с помощью рефа */
        });
        
        // e.target.reset();
      }

    return (
        <PopupWithForm 
      title={'Обновить аватар'} 
      name={'avatar'} 
      text={'Сохранить'} 
      children={
          <>
          <label className="form__label">
                <input id="link-input" ref={avatarRef} type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на фото" required/>
                    <span id="link-input-error" className="form__input-error form__input-error_active"></span>
                </label>
          </>
      } 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}/>
    )
}

export default EditAvatarPopup;