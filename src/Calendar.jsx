import React from 'react';

import CalendarDateHeader from './Date/CalendarDateHeader';
import CalendarDateBody from './Date/CalendarDateBody';
import CalendarDateFooter from './Date/CalendarDateFooter';

import CalendarTimeHeader from './Time/CalendarTimeHeader';
import CalendarTimeBody from './Time/CalendarTimeBody';

let Calendar = React.createClass({
	propTypes: {
		left: React.PropTypes.number,
		top: React.PropTypes.number,
		display: React.PropTypes.string,
		date: React.PropTypes.string,
		time: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			left: 0,
			top: 0,
			display: 'none',
			date: '1970-1-1',
			time: '00:00:00'
		}
	},
	getInitialState() {
		const oDate = new Date();
		return {
			year: oDate.getFullYear(),
			month: oDate.getMonth()+1,
			date: oDate.getDate(),
			hours: oDate.getHours(),
			minutes: oDate.getMinutes(),
			seconds: oDate.getSeconds()
		};
	},
	componentWillReceiveProps(nextProps) {
		const aDate = nextProps.date.split('-');
		const aTime = nextProps.time.split(':');
		if(aDate.length > 1 && aTime.length > 1){
			this.setState({
				year: aDate[0],
				month: aDate[1],
				date: aDate[2],
				hours: aTime[0],
				minutes: aTime[1],
				seconds: aTime[2]
			});
		}
	},
	handleClick(action, e) {
		e.stopPropagation();
		let state = this.state;
		let nYear = state.year;
		let nMonth = state.month;
		let nDate = state.date;
		let nHours = state.hours;
		let nMinutes = state.minutes;
		let nSeconds = state.seconds;
		let oDate = null;
		let sDate = '';
		let sTime = '';
		switch(action){
			case 'prevYear':
				nYear--;
				break;
			case 'prevMonth':
				nMonth--;
				if(nMonth < 1){
					nYear--;
					nMonth = 12;
				}
				break;
			case 'nextYear':
				nYear++;
				break;
			case 'nextMonth':
				nMonth++;
				if(nMonth > 12){
					nYear++;
					nMonth = 1;
				}
				break;
			case 'nowTime':
				oDate = new Date();
				sDate = oDate.getFullYear() + '-' + (oDate.getMonth()+1) + '-' + oDate.getDate();
				sTime = oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
				this.props.handleClick4DateTime(sDate, sTime);
				break;
		}
		this.setState({
			year: nYear,
			month: nMonth,
			date: nDate,
			hours: nHours,
			minutes: nMinutes,
			seconds: nSeconds
		});
	},
	render() {
		let panelContent = '';
		const props = this.props;
		const pos = {
			left: props.left+'px',
			top: props.top+'px',
			display: props.display
		};
		// 显示的面板
		switch(props.showPanel){
			case 'hour':
				panelContent = (
					<div tabIndex="1" className="cy-calendar" style={pos} onBlur={this.props.handleBlur}>
						<CalendarTimeHeader title="选择小时" />
						<CalendarTimeBody {...this.state}
							row={6} col={4} type="hours"
							handleClick={props.handleClick4DateTime} />
					</div>
				);
				break;
			case 'minute':
				panelContent = (
					<div tabIndex="1" className="cy-calendar" style={pos} onBlur={this.props.handleBlur}>
						<CalendarTimeHeader title="选择分钟" />
						<CalendarTimeBody {...this.state}
							row={6} col={10} type="minutes"
							handleClick={props.handleClick4DateTime} />
					</div>
				);
				break;
			case 'second':
				panelContent = (
					<div tabIndex="1" className="cy-calendar" style={pos} onBlur={this.props.handleBlur}>
						<CalendarTimeHeader title="选择秒" />
						<CalendarTimeBody {...this.state}
							row={6} col={10} type="seconds"
							handleClick={props.handleClick4DateTime} />
					</div>
				);
				break;
			default:
				panelContent = (
					<div tabIndex="1" className="cy-calendar" style={pos} onBlur={this.props.handleBlur}>
						<CalendarDateHeader {...this.state}
							handleClick={this.handleClick} />
						<CalendarDateBody {...this.state}
							handleClick={props.handleClick4DateTime} />
						<CalendarDateFooter {...this.state}
							handleClick={this.handleClick}
							handleClick4Time={props.handleClick4Time}
							handleDetermine={props.handleDetermine} />
					</div>
				);
		}
		return panelContent;
	}
});

export default Calendar;
