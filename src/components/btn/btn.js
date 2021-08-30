import React from 'react';
import './btn.scss';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.date.text || 'Текст';
    this.link = this.props.date.link || './link-stub';
    this.height = this.props.date.height;
    this.border = this.props.date.border;
    this.arrow = this.props.date.arrow;
    this.hover = this.props.date.hover;
  }
  render() {
    return (
      <div
        className={
          'btn ' +
          (this.border ? 'btn_border ' : 'btn_gradient ') +
          (this.height === 'narrow' ? 'btn_narrow ' : 'btn_wide ') +
          (this.hover ? 'btn_hover ' : '')
        }
      >
        <button
          type="button"
          className={
            'btn__block' +
            (this.border
              ? ' btn__block_border '
              : ' btn__block_gradient ' + (this.arrow ? 'btn__block_gradient_arrow' : ''))
          }
        >
          <a className="btn__link" href={this.link}>
            {this.text}
          </a>
          {this.arrow ? <div className="btn__arrow btn__arrow_white"></div> : ''}
        </button>

        {this.border ? <div className={'btn__border ' + (this.hover ? 'btn__border_hover ' : '')}></div> : ''}
      </div>
    );
  }
}

export default Btn;
