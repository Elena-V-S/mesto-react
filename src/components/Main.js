import React from 'react';
import logoImg from '../images/image-avatar.jpg';
import api from '../utils/Api';
import Card from './Card';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
      // Хук, управляющий внутренним состоянием.
      const [userName, setUserName] = React.useState('Жак-Ив Кусто');
      const [userDescription, setUserDescription] = React.useState('Исследователь океана');
      const [userAvatar, setUserAvatar] = React.useState(logoImg);
      const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)})
        .catch ((err) => {
            console.log(`Ошибка: ${err}`)});
      }, []);

   
      React.useEffect(() => {
        api.getInitialCards()
        .then(res => setCards(res))
        .catch ((err) => {
            console.log(`Ошибка: ${err}`)});
      }, []);
     
  return (
    <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <div className="profile__avatar-img" style={{ backgroundImage: `url(${userAvatar})` }} alt="фото" onClick={onEditAvatar} />
                </div>
                <div className="profile__content">
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit profile__button" onClick={onEditProfile} type="button"></button>
                        </div>
                        <p className="profile__activity">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__card-edit profile__button" onClick={onAddPlace} ></button>
                </div>
            </section>
        
            <section className="elements">
                <ul className="elements__list">
                {cards.map((card, i) => <Card key={i} card={card} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </main>  
  );
}

export default Main;

