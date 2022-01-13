import React from 'react';
import './form-search-room.scss';
import Button from '../../components/button/button';
import Dropdown from '../../components/dropdown/dropdown';
import DropdownDates from '../../components/dropdown-dates/dropdown-dates';

class FormSearchRoom extends React.Component {
  constructor(props) {
    super(props);
    this.action = this.props.action || './link-stub';
    this.button = {
      text: 'подобрать номер',
    };
    this.guests = {
      topic: 'Гости',
      id: 'dropdownFormSearchRoom',
      items: [
        {
          text: 'взрослые',
          number: 2,
        },
        {
          text: 'дети',
          number: 1,
        },
        {
          text: 'младенцы',
        },
      ],
    };
    this.fieldsDates = [
      {
        topic: 'Прибытие',
      },
      {
        topic: 'Выезд',
      },
    ];
  }

  render() {
    let { action, button, guests, fieldsDates } = this;

    return (
      <form className="form-search-room" action={action}>
        <h1 className="form-search-room__topic">Найдём номера под ваши пожелания</h1>
        <div className="form-search-room__dropdown-dates">
          <DropdownDates fields={fieldsDates} />
        </div>
        <Dropdown data={guests} />
        <div className="form-search-room__button">
          <Button data={button} />
        </div>
      </form>
    );
  }
}

export default FormSearchRoom;
