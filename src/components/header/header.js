import React from 'react';
import './header.scss';
import logo from './img/logo.svg';
import Btn from '../../components/btn/btn';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.menuItems = this.props.date.items || false;
    this.authorization = this.props.date.authorization || false;
    this.userName = this.props.date.name || 'Имя';
    this.btnLogin = {
      height: 'narrow',
      text: 'Войти',
      border: true,
    };
    this.btnRegistr = {
      height: 'narrow',
      text: 'Зарегистрироваться',
    };
  }
  menu(items) {
    return items.map((item) => (
      <li
        class={
          'header__menu-li ' +
          (item.state === 'active' ? 'header__menu-li_active' : '') +
          (item.type === 'expand' ? 'header__menu-li_expand js-header__menu-li_expand' : '')
        }
      >
        <a class="header__menu-a" href={item.link}>
          {item.menuItem}
        </a>
        {item.submenu && <ul class="header__submenu">{this.submenu(item.submenu)}</ul>}
      </li>
    ));
  }
  submenu(sbm) {
    return sbm.map((sbmItem) => (
      <li class="header__submenu-li">
        <a class="header__submenu-a" href={sbmItem.sbmLink}>
          {sbmItem.menuItem}
        </a>
      </li>
    ));
  }
  render() {
    return (
      <header class="header">
        <div class="header__content-container">
          <a class="header__logo-link" href="./landing-page.html">
            <img class="header__logo" src={logo} alt="logo" />
          </a>
          <div class="header__menu-mobile js-header__menu-mobile"></div>
          <div class="header__links header__links_hidden">
            {this.menuItems && (
              <nav class="header__block-menu">
                <ul class="header__menu">{this.menu(this.menuItems)}</ul>
              </nav>
            )}
            {this.authorization ? (
              <div class="header__block-login">
                <div class="header__login-vertical-line"></div>
                <p>{this.userName}</p>
              </div>
            ) : (
              <div class="header__block-login">
                <div class="header__btn header__btn_border">
                  <Btn date={this.btnLogin} />
                </div>
                <div class="header__btn header__btn_gradient">
                  <Btn date={this.btnRegistr} />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
