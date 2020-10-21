import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  // Хук, управляющий внутренним состоянием.
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  // Стейт, отвечающий за текущего пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  // эффект, вызываемый при монтировании компонента, отправляет запрос в API за пользовательскими данными 
  // и обновляет стейт-переменную из полученного значения.
  React.useEffect(() => {
    api.getUserData()
      .then(res => { setCurrentUser(res) })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }, []);

  //стейт для хранения карточек
  const [cards, setCards] = React.useState([]);
  //эффект обращения к АПИ за начальными карточками
  React.useEffect(() => {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }, []);

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
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  //обработчик клика на корзину
  function handleDeleteClick(card) {
    api.deleteCard(card._id)
      .then((res) => {
        const newCards = cards.filter(i =>
          (i._id !== card._id))
        setCards(newCards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }

  //обработчики клика на лайк - постановка и снятие лайка

  function handleCardLike(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.addLike(card._id).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }

  function handleCardDisLike(card) {

    api.deleteLike(card._id)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }
  // обработчик сабмита формы редактирования профиля
  function handleUpdateUser({ name, about }) {
    api.patchUserData({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));

  }
  // обработчик сабмита формы редактирования аватара
  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar(avatar)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }
  // обработчик сабмита формы добавления карточки
  function handleAddPlaceSubmit({ name, link }) {
    api.addNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardDelete={handleDeleteClick} onCardLike={handleCardLike} onCardDislike={handleCardDisLike} />
          <Footer />
          {isEditProfilePopupOpen && <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />}
          {isEditAvatarPopupOpen && <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />}
          {isAddPlacePopupOpen && <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCard={handleAddPlaceSubmit} />}


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
    </CurrentUserContext.Provider>
  );
}

export default App;
