import React from 'react';


function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
      }
    return (
        <li key={card._id} className="card">
            <figure className="card__group">
                <img className="card__image" alt="фото" src={card.link} onClick={handleClick}/>'
                <button type="button" className="card__delete"></button>
                <figcaption className="card__description">
                    <h3 className="card__title" >{card.name}</h3>
                    <div className='card__like-group'>
                        <button type="button" className="card__like"></button>
                        <div className='card__like-counter'>{card.likes.length}</div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default Card;