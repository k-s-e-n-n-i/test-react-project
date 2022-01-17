import React from 'react';
import './input-text.scss';
import TopicLabel from '../../components/topic-label/topic-label';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      id: this.props.data.id,
      topic: this.props.data.topic || '',
      label: this.props.data.label || '',
      placeholder: this.props.data.placeholder || 'Введите данные...',
      inputText: this.props.data.inputText || '',
      state: this.props.data.state || '',
      type: this.props.data.type || '',
      name: this.props.data.name || '',
    };
  }

  checkSubscription(type) {
    return type === 'subscription' ? 'input-text_subscription' : '';
  }
  checkFocus(state) {
    return state === 'focus' ? 'input-text__input_hover' : '';
  }
  checkNameDate(name) {
    return name === 'date' ? 'input-text__input_date' : '';
  }

  render() {
    let {
      data: { id, topic, label, placeholder, inputText, state, type, name },
    } = this;

    return (
      <div className={`input-text ${this.checkSubscription(type)}`}>
        <TopicLabel topic={topic} label={label} />
        <input
          className={`input-text__input ${this.checkFocus(state)} ${this.checkNameDate(name)}`}
          name={name}
          placeholder={placeholder}
          id={`inputText${id}`}
          defaultValue={inputText}
        ></input>
      </div>
    );
  }
}

export default InputText;
