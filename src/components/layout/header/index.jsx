import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/imgbox/png/headerLogo.png";
import IconMore from "assets/imgbox/svg/more.svg";
import IconBookmark from "assets/imgbox/svg/bookmark.svg";
import IconSearch from "assets/imgbox/svg/search.svg";
import IconBurger from "assets/imgbox/svg/burger.svg";
import IconClose from "assets/imgbox/svg/close.svg";
import IconArrowNext from "assets/imgbox/svg/arrowNext.svg";
import IconArrowDown from "assets/imgbox/svg/arrowDown.svg";
import UserNav from "assets/imgbox/jpg/header-user.jpg";

const index = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [MenuItemOpen, setMenuItemOpen] = useState(1);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <div
              onClick={() => setBurgerOpen((prev) => !prev)}
              className={` header__burger ui__btn-header`}
            >
              <img src={IconBurger} alt="icon burger" />
            </div>
            <div className="header__logo">
              <div className="logo__imgbox">
                <img src={Logo} alt="mega news logo" />
              </div>
            </div>
            <div className={`header__menu ${burgerOpen ? "active" : ""}`}>
              <nav>
                <div className="title-menu">
                  <img className="in-navbarLogo" src={Logo} alt="logo" />
                  <div
                    className="close ui__btn-header"
                    onClick={() => setBurgerOpen((prev) => !prev)}
                  >
                    <img src={IconClose} alt="" />
                  </div>
                </div>
                <ul>
                  <li
                    onClick={() => setMenuItemOpen(1)}
                    className={`menu-items  ${
                      MenuItemOpen == 1 ? "active" : ""
                    }`}
                  >
                    <span className={`border-nav`}></span>
                    Categories
                    <span>
                      <img
                        src={MenuItemOpen === 1 ? IconArrowNext : IconArrowDown}
                        alt=""
                      />
                    </span>
                  </li>
                  <li
                    className={`menu-items ${
                      MenuItemOpen == 2 ? "active" : ""
                    }`}
                    onClick={() => setMenuItemOpen(2)}
                  >
                    <span className={`border-nav`}></span>
                    Pages
                    <span>
                      <img
                        onClick={() => setMenuItemOpen(false)}
                        src={MenuItemOpen === 2 ? IconArrowNext : IconArrowDown}
                        alt=""
                      />
                    </span>
                  </li>
                  <li className="page-items">Contact us</li>
                  <li className="page-items">About us</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header__right">
            <div className="header__searchbox">
              <span className="search-icon">
                <img src={IconMore} alt="moreIcon" />
              </span>
              <input type="text" placeholder="Search Anything" />
              <span className="search-icon search">
                <img src={IconSearch} alt="searchIcon" />
              </span>
            </div>
            <div className="header__user">
              <div className="user-imgbox">
                <img src={UserNav} alt="user-admin" />
              </div>
              <h3 className="admin-name">Bekhzad</h3>
              <img src={IconArrowDown} alt="icon down" />
            </div>
            <div className="header__bookMark ui__btn-header">
              <img src={IconBookmark} alt="icon bookmark" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
