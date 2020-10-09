import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
    // function handleEditAvatarClick() {
    //     const profileFoto = document.querySelector('.popup_type_avatar');
    //     console.log(444);
    //     profileFoto.classList.add('popup_is-opened');
    // }
    // function handleEditProfileClick() {
    //     const profileFoto = document.querySelector('.popup_type_edit');
    //     profileFoto.classList.add('popup_is-opened');
    // }
    // function handleAddPlaceClick() {
    //     const profileFoto = document.querySelector('.popup_type_new-card');
    //     profileFoto.classList.add('popup_is-opened');
    // }

  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <Main handleEditAvatarClick={() => console.log(444)} handleEditProfileClick={() => console.log(444)} handleAddPlaceClick={() => console.log(444)} />
      <Footer/>
        

        <div className="popup popup_type_edit">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h4 className="popup__title">Редактировать профиль</h4>
                <form action="#" className="form" name="add-profile" method="GET" noValidate>
                    <label className="form__label">
                        <input id="name-input" type="text" className="form__input form__input_type_name" name="name" placeholder="имя" minLength="2" maxLength="40" required/>
                        <span id="name-input-error" className="form__input-error form__input-error_active"></span>
                    </label>    
                    <label className="form__label">    
                        <input id="activity-input" type="text" className="form__input form__input_type_activity" name="about" placeholder="профессия" maxLength="2" maxLength="200" required/>
                        <span id="activity-input-error" className="form__input-error form__input-error_active"></span>
                    </label>
                    <button type="submit" className="form__button">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_type_new-card">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h4 className="popup__title">Новое место</h4>
                <form action="#" className="form" name="add-card" method="GET" noValidate>
                    <label className="form__label">
                        <input id="place-input" type="text" className="form__input form__input_type_place" name="name" placeholder="Название" minLength="1" maxLength="30" required/>
                        <span id="place-input-error" className="form__input-error form__input-error_active"></span>
                    </label> 
                    <label className="form__label">
                        <input id="link-input" type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на картинку" required/>
                        <span id="link-input-error" className="form__input-error form__input-error_active"></span>
                    </label> 
                    <button type="submit" className="form__button" disabled>Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup-image">
            <div className="popup-image__container">
                <button type="button" className="popup-image__close popup__close"></button>
                <figure className="popup-image__group">
                    <img src="./images/kirill-pershin-1088404-unsplash.jpg" alt="фото" className="popup-image__img"/>
                    <figcaption className="popup-image__description">
                        <h3 className="popup-image__title">Карачаево-Черкессия</h3>
                    </figcaption>
                </figure>
            </div>
        </div>
        
        <div className="popup popup_type_confirm">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h4 className="popup__title">Вы уверены?</h4>
                <form action="#" className="form" name="add-confirm" method="GET" noValidate>
                    <button type="submit" className="form__button">Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h4 className="popup__title">Обновить аватар</h4>
                <form action="#" className="form" name="update-avatar" method="GET" noValidate>
                    <label className="form__label">
                        <input id="link-input" type="url" className="form__input form__input_type_link" name="link" placeholder="ссылка на фото" required/>
                        <span id="link-input-error" className="form__input-error form__input-error_active"></span>
                    </label> 
                    <button type="submit" className="form__button" disabled>Сохранить</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
