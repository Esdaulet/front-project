import React, { useState } from "react";
import meta from "../../../assets/img/ai.png";
import ai from "../../../assets/img/ai.png"; // Новое изображение для курса английского языка
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Home.css";
import Courses from "../Courses/Courses";
import Community from "../Community/Community";
import Plans from "../Plans/Plans";

function Home() {
  const handleClick = () => {
    window.open("https://www.youtube.com/@techflixai", "_blank");
  };

  // Состояние для отслеживания открытого вопроса
  const [openQuestion, setOpenQuestion] = useState(null);

  // Массив вопросов и ответов
  const questions = [
    {
      question: "Как я могу начать обучение?",
      answer:
        'Для начала обучения просто нажмите на кнопку "Начать" и следуйте инструкциям.',
    },
    {
      question: "Как долго длится курс?",
      answer:
        "Длительность курса зависит от конкретного курса. Обычно курс длится от нескольких недель до нескольких месяцев.",
    },
    {
      question: "Могу ли я получить сертификат по окончании курса?",
      answer: "Да, после успешного завершения курса вы получите сертификат.",
    },
    {
      question: "Как связаться с поддержкой?",
      answer:
        "Вы можете связаться с нашей поддержкой через WhatsApp, отправив нам сообщение на указанный номер.",
    },
  ];

  // Функция для обработки клика по вопросу
  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="home_container">
            <div className="home_content">
              <h2 className="section_title">Узнайте все БЕСПЛАТНО!!!</h2>
              <p class="english-course-description">
                Погрузитесь в мир английского языка с нашими курсами!
                Инвестируйте свое время в обучение и приобретайте новые навыки!
              </p>

              <div className="home-btns">
                <button className="register-btn" onClick={handleClick}>
                  Начать
                </button>
                <button className="register-btn" onClick={handleClick}>
                  Смотреть сейчас
                </button>
              </div>
            </div>
            <div className="home-img">
              <div className="home-img-wrapper">
                <div className="box-01">
                  <div className="box-img">
                    <img src={meta} alt="" />
                  </div>
                  <div className="whatsapp-container">
                    <h5>500 + students</h5>
                    <AiOutlineWhatsApp color="green" />
                  </div>
                  <div className="support">
                    <h5>Active Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Community />
      <Plans />
      {/* Новый блок вопросов и ответов */}
      <section className="qa-section">
        <div className="container">
          <h2 className="section_title">Часто задаваемые вопросы</h2>
          <div className="qa-container">
            {questions.map((question, index) => (
              <div
                className={`question ${openQuestion === index ? "active" : ""}`}
                key={index}
                onClick={() => handleQuestionClick(index)}
              >
                <h3>{question.question}</h3>
                {/* Показываем ответ, если индекс совпадает с открытым вопросом */}
                <p>{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
