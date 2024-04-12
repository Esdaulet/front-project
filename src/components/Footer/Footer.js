import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Курсы английского языка</h2>
            </div>
            <p>
              Разблокируйте свой потенциал с нашими курсами английского языка
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Исследуйте</h4>
            <ul className="footer_list">
              <li>
                <Link to="/courses">Наши курсы</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleClick}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={handleClick}>
                  Свяжитесь с нами
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer_title">Свяжитесь с нами</h4>
            <ul className="footer_list">
              <li>
                <a href="mailto:info@englishcourse.com">
                  info@englishcourse.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <Link to="support" onClick={handleClick}>
                  Поддержка
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
