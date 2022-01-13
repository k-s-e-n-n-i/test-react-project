import React from 'react';
//import './calendar.ts';
import 'air-datepicker';
import './cell.scss';
import './datepicker-config.scss';
import './datepicker.scss';
import './navigation.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state || 'close';
    this.classWrapper = this.props.classWrapper || '';
  }

  render() {
    let { state, classWrapper } = this;

    return (
      <div className={classWrapper}>
        {state === 'open' ? (
          <div className="datepicker-here js-datepicker-here"></div>
        ) : (
          <div className="datepicker-here js-datepicker-here datepicker-here_hide"></div>
        )}
      </div>
    );
  }
}

export default Calendar;
