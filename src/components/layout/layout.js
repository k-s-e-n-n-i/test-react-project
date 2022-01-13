import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.header = {
      on: this.props.header === 0 ? false : true,
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
    this.footer = {
      on: this.props.footer === 0 ? false : true,
    };
  }
  render() {
    return (
      <div>
        {this.header.on && <Header data={this.header} />}
        {this.props.content && this.props.content()}
        {this.footer.on && <Footer />}
      </div>
    );
  }
}

export default Layout;
