import React from 'react';
import './social.scss';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id || 'soc';
    this.twitter = {
      on: this.props.twitter || false,
      name: 'twitter',
      link: this.props.twitter || './link-stub',
      icon: require('./img/twitter.svg').default,
    };
    this.facebook = {
      on: this.props.facebook || false,
      name: 'facebook',
      link: this.props.facebook || './link-stub',
      icon: require('./img/facebook.svg').default,
    };
    this.instagram = {
      on: this.props.instagram || false,
      name: 'instagram',
      link: this.props.instagram || './link-stub',
      icon: require('./img/instagram.svg').default,
    };

    this.socs = [this.twitter, this.facebook, this.instagram];
  }

  render() {
    return (
      <div className="social">
        {this.socs.map(
          (soc, index) =>
            soc.on && (
              <span className="social__item" key={`${this.id}item${index}`}>
                <a href={soc.link}>
                  <img className={`social__item ${soc.name}`} src={soc.icon} alt={soc.name}></img>
                </a>
              </span>
            )
        )}
      </div>
    );
  }
}

export default Social;
