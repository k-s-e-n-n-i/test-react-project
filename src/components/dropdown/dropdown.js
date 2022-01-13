import React from 'react';
import './dropdown.scss';
import Link from '../../components/link/link';
import TopicLabel from '../../components/topic-label/topic-label';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownDate = {
      name: this.props.data.name,
      topic: this.props.data.topic || 'Заголовок',
      label: this.props.data.label || '',
      activeText: this.props.data.activeText || 'Текст',
      id: this.props.data.id || '',
      state: this.props.data.state || 'close',
      hasBtns: this.props.data.hasBtns || true,
      items: this.props.data.items || [],
    };
    this.dropdownOpenClass = '';
    this.dropdownItemsHiddenClass = '';
  }
  vars() {
    return;
  }

  render() {
    let {
      dropdownDate: { name, topic, label, activeText, id, state, hasBtns, items },
      dropdownOpenClass,
      dropdownItemsHiddenClass,
    } = this;

    state === 'close'
      ? (dropdownItemsHiddenClass = 'dropdown__items_hidden')
      : (dropdownOpenClass = 'dropdown__field_actived');

    return (
      <div className="dropdown js-dropdown" name={name} id={id}>
        <TopicLabel topic={topic} label={label} />

        {items !== 0 ? (
          <div className={`dropdown__field js-dropdown__field ${dropdownOpenClass}`}>{activeText}</div>
        ) : (
          <div className={`dropdown__field js-dropdown__field`}>{activeText}</div>
        )}

        {items !== 0 && (
          <div className={`dropdown__items ${dropdownItemsHiddenClass}`}>
            {hasBtns && (
              <div className="dropdown__btns js-dropdown__btns">
                <div className="dropdown__btn-link dropdown__btn-link_clean">
                  <Link text="Очистить" type="clean" />
                </div>
                <div className="dropdown__btn-link dropdown__btn-link_ok">
                  <Link text="Применить" type="ok" />
                </div>
              </div>
            )}
          </div>
        )}

        {name === 'date' && <div className="dropdown__calendar"></div>}
      </div>
    );
  }
}

export default Dropdown;
