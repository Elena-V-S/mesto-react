import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card({ card, onCardClick, onCardLike, onCardDislike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        isLiked ? onCardDislike(card) : onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }


    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete ${isOwn ? 'card__delete_visible' : 'card__delete_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `${!isLiked ? 'card__like' : 'card__like card__like_color'}`;


    return (
        <li key={card._id} className="card">
            <figure className="card__group">
                <img className="card__image" alt="фото" src={card.link} onClick={handleClick} />'
                <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} ></button>
                <figcaption className="card__description">
                    <h3 className="card__title" >{card.name}</h3>
                    <div className='card__like-group'>
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <div className='card__like-counter'>{card.likes.length}</div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card;