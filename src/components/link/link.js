import React from 'react';
import './link.scss';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.date = {
      url: './link-stub',
      text: 'Ссылка',
      type: '',
      classBlock: '',
    };
  }
  defineUrl() {
    return this.props.url || this.date.url;
  }
  defineText() {
    return this.props.text || this.date.text;
  }
  defineType() {
    const type = this.props.type || this.date.type;
    switch (type) {
      case 'gray': {
        return 'link link_gray';
      }
      case 'clean': {
        return 'link link_clean';
      }
      case 'ok': {
        return 'link link_ok';
      }
      default: {
        return 'link';
      }
    }
  }
  render() {
    return (
      <div className={this.props.classBlock}>
        <a className={this.defineType()} href={this.defineUrl()}>
          {this.defineText()}
        </a>
      </div>
    );
  }
}

export default Link;
