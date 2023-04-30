import React from "react";
import { useEffect, useState } from "react";
import {api} from '../../utils/Api';
import Card from "../Card/Card";

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick, handleCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
        <main className="content">
        <section className="profile">
          <button className="profile__avatar-container" type="button">
            <img className="profile__avatar" src={userAvatar} alt="фото-аватар" />
            <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}>
            </div>
          </button>
          <div className="profile__text-container">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__open-popup" onClick={handleEditProfileClick}>
              </button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button className="profile__button" type="button" onClick={handleAddPlaceClick}>
          </button>
        </section>
        <section className="cards" aria-label="информация о посещенных местах: фото, название, лайк">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key = {card._id}
                card = {card}
                link = {card.link}
                name = {card.name}
                onCardClick={handleCardClick}
                likes = {card.likes.length}
              />
            ))}
          </ul>
        </section>
      </main>
  );
}

export default Main;