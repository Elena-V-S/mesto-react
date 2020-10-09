import React from 'react';
import logoImg from '../images/image-avatar.jpg';

function Main({ handleEditAvatarClick, 
    handleEditProfileClick, 
    handleAddPlaceClick }) {
        
  return (
    <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar-img" src={logoImg} alt="фото" onClick={handleEditAvatarClick}/>
                    {/* <button type="button" className="profile__avatar-update" onClick={handleEditAvatarClick}></button> */}
                </div>
                <div className="profile__content">
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__edit profile__button" onClick={handleEditProfileClick} type="button"></button>
                        </div>
                        <p className="profile__activity">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__card-edit profile__button" onClick={handleAddPlaceClick} ></button>
                </div>
            </section>
        
            <section className="elements">
                <ul className="elements__list">
                  
                </ul>
            </section>
        </main>  
  );
}

export default Main;

