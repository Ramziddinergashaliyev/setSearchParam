import React from "react";
import img1 from "../../../assets/images/foo.png";
import img2 from "../../../assets/images/foo1.png";
import img3 from "../../../assets/images/foo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__data container">
        <div className="footer__rows">
          <div className="footer__rows__icon">
            <div className="footer__rows__item">
              <img src={img1} alt="" />
              <p>Готовим вручную  и с любовью</p>
            </div>
            <div className="footer__rows__item">
              <img src={img2} alt="" />
              <p>Готовим вручную  и с любовью</p>
            </div>
            <div className="footer__rows__item">
              <img src={img3} alt="" />
              <p>Готовим вручную  и с любовью</p>
            </div>
          </div>
          <p className="footer__rows__item__text">
            © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
            Тухачевского, дом 22
          </p>
        </div>
        <ul className="footer__list">
          <h3>Информация</h3>
          <li className="footer__item">О компании</li>
          <li className="footer__item">Гарантии вкуса и свежести</li>
          <li className="footer__item">Доставка и оплата</li>
          <li className="footer__item">Контакты</li>
        </ul>
        <ul className="footer__list">
          <h3>Каталог</h3>
          <li className="footer__item">Каталог десертов</li>
          <li className="footer__item">Готовые наборы</li>
          <li className="footer__item">Собрать свой набор</li>
          <li className="footer__item">Наборы с печатью</li>
          <li className="footer__item">Свадебные предложения</li>
          <li className="footer__item">Акции</li>
        </ul>
        <ul className="footer__list">
          <h3>ДЛЯ БИЗНЕСА</h3>
          <li className="footer__item">Корпоративные подарки</li>
          <li className="footer__item">Для юридических лиц</li>
          <li className="footer__item">Оповикам</li>
        </ul>
        <div className="footer__contact">
          <h3>+7 309 82 88</h3>
          <p>с 9:00 до 21:00</p>
          <div className="footer__contact__btns">
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <RiLinkedinFill />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
