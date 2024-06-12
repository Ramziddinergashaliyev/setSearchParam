import React from "react";
import img from "../../../assets/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header__top">
        <div className="header__top__row container">
          <ul className="header__top__row__list">
            <li className="header__top__row__item">Гарантия свежести</li>
            <li className="header__top__row__item">Доставка и оплата</li>
            <li className="header__top__row__item">Оптовые поставки</li>
            <li className="header__top__row__item">Контакты</li>
          </ul>
          <div className="header__top__row__right">
            <div className="header__top__row__right__icons">
              <CiLocationOn />
              <p>Санкт-Петербург</p>
            </div>
            <div className="header__top__row__right__icons">
              <IoPhonePortraitOutline />
              <p>8 812 309-82-88</p>
            </div>
            <div className="header__top__row__right__icons">
              <LiaShoppingBagSolid />
              <p>В корзине (4 товара)</p>
            </div>
          </div>
        </div>
      </div>
      <header className="header container">
        <nav className="header__nav">
          <ul className="header__nav__left__list">
            <li className="header__nav__left__item">СЛАДКИЕ ДНИ</li>
            <li className="header__nav__left__item">подарочные наборы</li>
            <li className="header__nav__left__item">Собрать набор</li>
          </ul>
          <div className="header__nav__middle">
            <NavLink to={"/"}>
              <img src={img} alt="" />
            </NavLink>
          </div>
          <ul className="header__nav__right__list">
            <li className="header__nav__left__item">Создать дизайн</li>
            <li className="header__nav__left__item">КОМПАНИЯМ</li>
            <li className="header__nav__left__item">ВЕСЬ КАТАЛОГ</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
