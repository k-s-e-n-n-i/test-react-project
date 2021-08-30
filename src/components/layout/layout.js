import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.header = {
      items: [
        {
          menuItem: 'О нас',
        },
        {
          menuItem: 'Услуги',
          type: 'expand',
          submenu: [
            {
              menuItem: 'Услуга №1',
            },
            {
              menuItem: 'Услуга №2',
            },
          ],
        },
        {
          menuItem: 'Вакансии',
        },
        {
          menuItem: 'Новости',
        },
        {
          menuItem: 'Соглашения',
          type: 'expand',
          submenu: [
            {
              menuItem: 'Соглашение №1',
            },
            {
              menuItem: 'Соглашение №2',
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.props.header !== 0 && <Header date={this.header} />}
        {this.props.content && this.props.content()}
        {this.props.footer !== 0 && <Footer />}
      </div>
    );
  }
}

export default Layout;
