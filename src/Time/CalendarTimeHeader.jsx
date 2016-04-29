import React from 'react';

let CalendarTimeHeader = React.createClass({
  getDefaultProps() {
    return {
      title: '时间面板'
    }
  },
  render() {
		return (
			<div className="cy-calendar-header">
				<span>{this.props.title}</span>
			</div>
		);
	}
});

export default CalendarTimeHeader;
