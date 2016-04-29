import React from 'react';

let CalendarDateHeader = React.createClass({
  getDefaultProps() {
    return {
      year: 1970,
      month: 1
    }
  },
  render() {
 		const props = this.props;
 		return (
 			<div className="cy-calendar-header">
				<a title="上一年" onClick={props.handleClick.bind(null, 'prevYear')}>«</a>
				<a title="上个月" onClick={props.handleClick.bind(null, 'prevMonth')}>‹</a>
				<span>{props.year + '年' + (props.month) + '月'}</span>
				<a title="下个月" onClick={props.handleClick.bind(null, 'nextMonth')}>›</a>
				<a title="下一年" onClick={props.handleClick.bind(null, 'nextYear')}>»</a>
			</div>
 		);
 	}
});

export default CalendarDateHeader;
