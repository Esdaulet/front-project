import React from "react";
import "./plans.css";
import { Link } from "react-router-dom";

function Plans() {
  const russianPricingData = [
    {
      title: "Обычный участник",
      price: "0$",
      duration: "/месяц",
      color: "#fff",
      features: [
        "Неограниченный доступ к курсам",
        "Поддержка клиентов",
        "Личный наставник",
        "Стандартные возможности",
        "5 дней в неделю",
      ],
    },
    {
      title: "Премиум участник",
      price: "100$",
      duration: "/месяц",
      color: "#6f55f2",
      features: [
        "Неограниченный доступ к курсам",
        "Поддержка клиентов",
        "Личный наставник",
        "Стандартные возможности",
        "5 дней в неделю",
      ],
    },
    {
      title: "Стандартный участник",
      price: "10$",
      duration: "/месяц",
      color: "#fff",
      features: [
        "Неограниченный доступ к курсам",
        "Поддержка клиентов",
        "Личный наставник",
        "Стандартные возможности",
        "5 дней в неделю",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="pricing_top">
        <h2 className="section_title">Премиальные тарифные планы</h2>
        <p>
          Разблокируйте элитные тарифные планы с EduTech и опередите остальных
        </p>
      </div>
      <div className="pricing_wrapper">
        {russianPricingData.map((pricingItem, index) => (
          <div className="pricing_item" key={index}>
            <div
              className="pricing_card-top"
              style={{ background: pricingItem.color }}
            >
              <h2 className="section_title">{pricingItem.title}</h2>
              <h2 className="pricing_section_title">
                {pricingItem.price}
                <span>{pricingItem.duration}</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                {pricingItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="register-btn">Присоединиться</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
