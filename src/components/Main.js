import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDelete, onCardLike, onCardDislike}) {
     
     //хук React.useContext возвращает значение контекста, 
     //которое было передано в пропс value провайдера
     const currentUser = React.useContext(CurrentUserContext);
      
  return (
    <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__avatar-img" style={{ backgroundImage: `url(${currentUser.avatar})` }}  alt="фото" onClick={onEditAvatar} />
                </div>
                <div className="profile__content">
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit profile__button" onClick={onEditProfile} type="button"></button>
                        </div>
                        <p className="profile__activity">{currentUser.about}</p>
                    </div>
                    <button type="button" className="profile__card-edit profile__button" onClick={onAddPlace} ></button>
                </div>
            </section>
        
            <section className="elements">
                <ul className="elements__list">
                {cards.map((card, i) => <Card key={i} card={card} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} onCardDislike={onCardDislike}/>)}
                </ul>
            </section>
        </main>  
  );
}

export default Main;

