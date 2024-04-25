import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const SupportPage = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleContactFormToggle = () => {
    setContactFormVisible(!contactFormVisible);
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки сообщения на сервер или обработки его
    setMessage("");
    setContactFormVisible(false);
    // Предположим, что после отправки сообщения пользователь перенаправляется на страницу "Спасибо за обращение"
  };

  return (
    <div className="support-page">
      <h1>Поддержка React</h1>
      <p className="pppp">
        Добро пожаловать на страницу поддержки React на нашем сайте курса
        английского языка!
      </p>
      <div className="faq-section">
        <h2>Часто задаваемые вопросы (FAQ)</h2>
        <div className="faq-item">
          <h3>Что такое React и как я могу использовать его на вашем сайте?</h3>
          <p>
            React - это JavaScript библиотека для создания пользовательских
            интерфейсов. Мы используем React для создания динамичных и
            интерактивных элементов на нашем сайте, что делает его более удобным
            и отзывчивым. Вы можете использовать React, не загружая его
            отдельно, поскольку мы уже включили его в наш проект.
          </p>
        </div>
        <div className="faq-item">
          <h3>
            У меня проблемы с загрузкой страницы или элементов на вашем сайте,
            что делать?
          </h3>
          <p>
            Если у вас возникли проблемы с загрузкой или отображением элементов
            на нашем сайте, пожалуйста, убедитесь, что ваш браузер поддерживает
            JavaScript и что у вас установлена последняя версия браузера. Также,
            попробуйте очистить кеш браузера и перезагрузить страницу. Если
            проблема не устраняется, пожалуйста, свяжитесь с нашей{" "}
            <Link to="/контакты">службой поддержки</Link>.
          </p>
        </div>
      </div>
      <div className="contact-section">
        <button className="toggle-form-btn" onClick={handleContactFormToggle}>
          {contactFormVisible ? "Закрыть форму" : "Связаться с нами"}
        </button>
        {contactFormVisible && (
          <form className="contact-form" onSubmit={handleSubmitMessage}>
            <h2>Связаться с нами</h2>
            <label htmlFor="message">Сообщение:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
            <button type="submit">Отправить</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SupportPage;
