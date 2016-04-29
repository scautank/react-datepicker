import React from 'react';
import CalendarDateBodyCol from './CalendarDateBodyCol';

let CalendarDateBodyContent = React.createClass({
  getDefaultProps() {

  },
  render() {
		const props = this.props;
    let arrHtml = [];
		for(let i = 0; i < 6; i++){
			arrHtml.push(
				<CalendarDateBodyCol key={i} {...props} rowIndex={i} />
			);
		}
		return (
			<tbody>{arrHtml}</tbody>
		);
	}
});

export default CalendarDateBodyContent;
