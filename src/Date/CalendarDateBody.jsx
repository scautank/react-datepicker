import React from 'react';

import CalendarDateBodyHeader from './CalendarDateBodyHeader';
import CalendarDateBodyContent from './CalendarDateBodyContent';

function getDateArray(year, month) {
  const lastDate = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month-1, 1).getDay();
  let arrDate = new Array(42);
  for(let i = 0; i < lastDate; i++, firstDay++){
    arrDate[firstDay] = year + '-' + month + '-' + (i+1);
  }
  return arrDate;
}

let CalendarDateBody = React.createClass({
  getDefaultProps() {

  },
  render() {
		const props = this.props;
    const arrDate = getDateArray(props.year, props.month);
		return (
			<div className="cy-calendar-body">
				<table>
					<CalendarDateBodyHeader />
					<CalendarDateBodyContent {...props} arrDate={arrDate} />
				</table>
			</div>
		);
	}
});

export default CalendarDateBody;
