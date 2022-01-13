import React from 'react';
import './footer.scss';
import logo from './img/logo.svg';
import Social from '../../components/social/social';
import InputText from '../../components/input-text/input-text';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footerMenu = [
      {
        topic: 'Навигация',
        listMenu: [
          {
            text: 'О нас',
          },
          {
            text: 'Новости',
          },
          {
            text: 'Служба поддержки',
          },
          {
            text: 'Услуги',
          },
        ],
      },
      {
        topic: 'О нас',
        listMenu: [
          {
            text: 'О сервисе',
          },
          {
            text: 'Наша команда',
          },
          {
            text: 'Вакансии',
          },
          {
            text: 'Инвесторы',
          },
        ],
      },
      {
        topic: 'Служба поддержки',
        listMenu: [
          {
            text: 'Соглашения',
          },
          {
            text: 'Сообщества',
          },
          {
            text: 'Связь с нами',
          },
        ],
      },
    ];
    this.inputSubscription = {
      placeholder: 'Email',
      id: 'Footer',
      type: 'subscription',
    };
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__block-menu">
          <div className="footer__content-container">
            <div className="footer__logo-block">
              <img className="footer__logo" src={logo} alt="logo" />
              <p className="footer__logo-text">
                Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
              </p>
            </div>

            <ul className="footer__footer-menu">
              {this.footerMenu.map((column, index) => (
                <li className="footer__menu-column" key={index}>
                  <ul className="footer__menu-list">
                    <li className="footer__menu-topic-column">{column.topic}</li>
                    {column.listMenu.map((itemLink, index) => (
                      <li className="footer__menu-li">
                        <a className="footer__menu-a" href={itemLink.link || './link-stub'}>
                          {itemLink.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="footer__subscription">
              <p className="footer__subscription-topic"> Подписка</p>
              <p className="footer__subscription-text">Получайте специальные предложения и новости сервиса</p>
              <div className="footer__subscription-input">
                <InputText data={this.inputSubscription} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright-block">
          <div className="footer__copyright-content">
            <p className="footer__copyright-text"> Copyright © 2018 Toxin отель. Все права защищены.</p>
            <Social
              twitter={'https://twitter.com/'}
              facebook={'https://www.facebook.com/'}
              instagram={'https://www.instagram.com/'}
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
