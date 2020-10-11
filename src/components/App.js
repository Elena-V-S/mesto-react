import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    
    // Хук, управляющий внутренним состоянием.
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    // const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    // * Обработчики событий: изменяют внутреннее состояние переменной
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleCardClick(card){
        setSelectedCard(card);
    }
    function closeAllPopups(){
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }


  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>

      {isEditProfilePopupOpen && 
      <PopupWithForm 
      title={'Редактировать профиль'} 
      name={'edit'} 
      text={'Сохранить'}
      children={
        <>
        <label className="form__label">
          <input id="name-input" type="text" className="form__input form__input_type_name" name="name" placeholder="имя" minLength="2" maxLength="40" required/>
          <span id="name-input-error" className="form__input-error form__input-error_active"></span>
        </label>    
        <label className="form__label">    
          <input id="activity-input" type="text" className="form__input form__input_type_activity" name="about" placeholder="профессия" maxLength="2" maxLength="200" required/>
          <span id="activity-input-error" className="form__input-error form__input-error_active"></span>
        </label>
       </>
      }
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}/>}

      {isAddPlacePopupOpen && 
      <PopupWithForm 
      title={'Новое место'} 
      name={'new-card'} 
      text={'Создать'} 
      children={
          <>
            <label className="form__label">
                <input id="place-input" type="text" className="form__input form__input_type_place" name="name" placeholder="Название" minLength="1" maxLength="30" required/>
                <span id="place-input-error" className="form__input-error form__input-error_active"></span>
            </label> 
            <label className="form__label">
                <input id="link-input" type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на картинку" required/>
                <span id="link-input-error" className="form__input-error form__input-error_active"></span>
            </label> 
            </>
      } 
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}/>}

      {isEditAvatarPopupOpen && 
      <PopupWithForm 
      title={'Обновить аватар'} 
      name={'avatar'} 
      text={'Сохранить'} 
      children={
          <>
          <label className="form__label">
                <input id="link-input" type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на фото" required/>
                    <span id="link-input-error" className="form__input-error form__input-error_active"></span>
                </label>
          </>
      } 
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}/>}
      
      {/* {isConfirmPopupOpen && //попап "Вы уверены?"
      <PopupWithForm 
      title={'Вы уверены?'} 
      name={'confirm'}  
      text={'Да'} 
      children={<></>}
      isOpen={isConfirmPopupOpen}
      onClose={closeAllPopups}/>} */}

      {selectedCard.link &&
      <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
      />}
      </div>
    </div>
  );
}

export default App;
