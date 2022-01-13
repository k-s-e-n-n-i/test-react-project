import React from 'react';
import './topic-label.scss';

class TopicLabel extends React.Component {
  constructor(props) {
    super(props);
    this.topic = this.props.topic || '';
    this.label = this.props.label || '';
  }

  render() {
    let { topic, label } = this;

    return topic !== '' && label !== '' ? (
      <div className="topic-label">
        <h3 className="topic-label__topic">{topic}</h3>
        <p className="topic-label__additional-text">{label}</p>
      </div>
    ) : topic !== '' ? (
      <div className="topic-label">
        <h3 className="topic-label__topic">{topic}</h3>
      </div>
    ) : (
      label !== '' && (
        <div className="topic-label">
          <p className="topic-label__additional-text">{label}</p>
        </div>
      )
    );
  }
}

export default TopicLabel;
