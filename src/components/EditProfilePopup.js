import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  // Стейты, управляющие внутренним состоянием полей name & description
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Обработчики изменения инпута обновляют стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  // обработчик
  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit'}
      text={'Сохранить'}
      children={
        <>
          <label className="form__label">
            {/* // Значение элемента «привязывается» к значению стейта */}
            <input id="name-input" type="text" value={name} onChange={handleNameChange} className="form__input form__input_type_name" name="name" placeholder="имя" minLength="2" maxLength="40" required />
            <span id="name-input-error" className="form__input-error form__input-error_active"></span>
          </label>
          <label className="form__label">
            <input id="activity-input" type="text" value={description} onChange={handleDescriptionChange} className="form__input form__input_type_activity" name="about" placeholder="профессия" minLength="2" maxLength="200" required />
            <span id="activity-input-error" className="form__input-error form__input-error_active"></span>
          </label>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  );
}

export default EditProfilePopup;