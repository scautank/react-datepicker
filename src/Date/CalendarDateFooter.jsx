import React from 'react';

let CalendarDateFooter = React.createClass({
  getDefaultProps() {

  },
  render() {
		return (
			<div className="cy-calendar-footer">
				<span className="cy-calendar-time">
					<input type="text" className="cy-calendar-time-hour" value={this.props.hours} onClick={this.props.handleClick4Time.bind(null, 'hour')} disabled />
					<span>:</span>
					<input type="text" className="cy-calendar-time-minute" value={this.props.minutes} onClick={this.props.handleClick4Time.bind(null, 'minute')} disabled />
					<span>:</span>
					<input type="text" className="cy-calendar-time-second" value={this.props.seconds} onClick={this.props.handleClick4Time.bind(null, 'second')} disabled />
				</span>
				<a className="cy-calendar-footer-btn" onClick={this.props.handleClick.bind(null, 'nowTime')}>此刻</a>
				<a className="cy-calendar-footer-btn" onClick={this.props.handleDetermine}>确定</a>
			</div>
		);
	}
});

export default CalendarDateFooter;
