import React from 'react';

import CalendarTimeBodyCol from './CalendarTimeBodyCol';

let CalendarTimeBody = React.createClass({
  getDefaultProps() {
    return {
      row: 0,
      col: 0,
      type: ''
    }
  },
  render() {
		let arrHtml = [];
		for(let i = 0; i < this.props.row; i++){
			arrHtml.push(<CalendarTimeBodyCol key={i} {...this.props} rowIndex={i} />);
		}
		return (
			<div className="cy-calendar-body">
				<table>
					<tbody>
						{arrHtml}
					</tbody>
				</table>
			</div>
		);
	}
});

export default CalendarTimeBody;
