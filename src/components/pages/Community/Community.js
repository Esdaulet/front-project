import React from "react";
import "./Community.css";
import englishCourse from "../../../assets/img/tc.png";

function Community() {
  const handleClick = () => {
    window.open("https://www.youtube.com/@techflixai", "_blank");
  };
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={englishCourse} alt="" />
        </div>
        <div className="start-content">
          <h2 className="section_title">
            Присоединяйтесь к нашему бесплатному курсу английского языка
          </h2>
          <p>
            Разблокируйте силу знаний и инноваций, присоединившись к нашему
            курсу английского языка
          </p>
          <button className="register-btn" onClick={handleClick}>
            Присоединиться сейчас
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
