import React from 'react';
import './dropdown-dates.scss';
import Calendar from '../../components/calendar/calendar';

class DropdownDates extends React.Component {
  constructor(props) {
    super(props);
    this.fields = this.props.fields;
  }

  getObj(obj) {
    const topic = obj.topic || '';
    const activeDate = obj.activeDate || 'ДД.ММ.ГГГГ';
    const newObj = { topic: topic, activeDate: activeDate };
    return newObj;
  }

  render() {
    let { fields } = this;

    return (
      <div className="dropdown-dates js-dropdown-dates">
        {fields.map((obj, index) => (
          <div className="dropdown-dates__date-block" name="date" key={index}>
            {this.getObj(obj).topic !== '' && <h3>{this.getObj(obj).topic}</h3>}
            <div className="dropdown-dates__dropdown js-dropdown-dates__dropdown">
              {this.getObj(obj).activeDate}
            </div>
          </div>
        ))}
        <Calendar classWrapper="dropdown-dates__calendar" state="open" />
      </div>
    );
  }
}

export default DropdownDates;
