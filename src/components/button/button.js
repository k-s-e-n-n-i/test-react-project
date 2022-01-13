import React from 'react';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.data.text || 'Текст';
    this.link = this.props.data.link || './link-stub';
    this.height = this.props.data.height;
    this.border = this.props.data.border;
    this.arrow = this.props.data.arrow;
    this.hover = this.props.data.hover;
  }
  render() {
    let { text, link, height, border, arrow, hover } = this;

    return (
      <div
        className={
          'button ' +
          (border ? 'button_border ' : 'button_gradient ') +
          (height === 'narrow' ? 'button_narrow ' : 'button_wide ') +
          (hover ? 'button_hover ' : '')
        }
      >
        <button
          type="button"
          className={
            'button__block' +
            (border
              ? ' button__block_border '
              : ' button__block_gradient ' + (arrow ? 'button__block_gradient_arrow' : ''))
          }
        >
          <a className="button__link" href={link}>
            {text}
          </a>
          {arrow ? <div className="button__arrow button__arrow_white"></div> : ''}
        </button>

        {border ? <div className={'button__border ' + (hover ? 'button__border_hover ' : '')}></div> : ''}
      </div>
    );
  }
}

export default Button;
