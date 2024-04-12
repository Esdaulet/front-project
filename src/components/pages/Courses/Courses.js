import React from "react";
import Slider from "react-slick"; // Импортируем компонент слайдера
import "slick-carousel/slick/slick.css"; // Подключаем стили слайдера
import "slick-carousel/slick/slick-theme.css"; // Подключаем тему слайдера
import "./Courses.css"; // Подключаем CSS-стили
import ai from "../../../assets/img/ai.png";
import sd from "../../../assets/img/sd.png";
import dg from "../../../assets/img/dg.png";
import hacker from "../../../assets/img/hacking.png";

function Courses() {
  const courseData = [
    {
      title: "Курсы английского для начинающих",
      Desc: "Изучите основы грамматики и словарный запас",
      img: ai,
    },
    {
      title: "Продвинутый английский",
      Desc: "Улучшите свои навыки английского с продвинутыми уроками",
      img: sd,
    },
    {
      title: "Бизнес-английский",
      Desc: "Овладейте профессиональным английским для работы и бизнеса",
      img: dg,
    },
    {
      title: "Произношение английского",
      Desc: "Совершенствуйте свое произношение и говорите уверенно",
      img: hacker,
    },
  ];

  // Настройки для слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container course-container">
      <div className="course-top">
        <h2 className="section_title best-courses">
          Наши курсы английского языка
        </h2>
        <p className="best-courses">
          Лучшие курсы английского языка с сертификатами
        </p>
        <div className="course-wrapper">
          {/* Используем Slider для отображения курсов */}
          <Slider {...sliderSettings} className="custom-slider">
            {courseData.map((course, index) => (
              <div className="course-item" key={index}>
                <span className="course-icon">
                  <img src={course.img} alt={course.title} />
                </span>
                <div className="course_content">
                  <h4>{course.title}</h4>
                  <p>{course.Desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Courses;
