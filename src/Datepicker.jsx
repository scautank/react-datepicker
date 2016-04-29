import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './Calendar';

let Datepicker = React.createClass({
	propTypes: {
		format: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			format: 'yyyy-MM-dd hh:mm:ss',
			value: ''
		}
	},
	getInitialState() {
		return {
			left: 0,
			top: 0,
			display: 'none',
			isDisabled: false,
			placeholder: '请选择时间',
			date: '',  // 日期
			time: '',  // 时间
			showPanel: 'date'  // date,hour,minute,second
		};
	},
	componentDidMount() {
		this.setState({placeholder: this.props.placeholder});
	},
	componentWillReceiveProps(nextProps) {
		const dateTimeValue = nextProps.value.split(' ');
		if(dateTimeValue.length === 2){
			this.setState({date: dateTimeValue[0], time: dateTimeValue[1]});
		}
	},
	handleClick4DateTime(date, time, e) {  // 更换日期时间
		e && e.stopPropagation();
		this.setState({
			date: date,
			time: time,
			showPanel: 'date'
		});
		this.props.onSelect && this.props.onSelect(date + ' ' + time);
	},
	handleClick4Time(showPanel, e) {  // 选择时分秒，切换面板
		e.stopPropagation();
		this.setState({showPanel: showPanel});
	},
	handleChange() {

	},
	handleFocus(e) {
		const oDatePickerInput = ReactDOM.findDOMNode(this.refs.datePickerInput);
		const l = oDatePickerInput.offsetLeft;
		const t = oDatePickerInput.offsetTop + oDatePickerInput.offsetHeight + 4;
		this.setState({
			left: l,
			top: t,
			display: 'block',
			isDisabled: true
		});
	},
    componentDidUpdate() {
		ReactDOM.findDOMNode(this.refs.calendar).focus();
	},
	handleDetermine(e){  // 确认
		e.stopPropagation();
		this.setState({display: 'none'});
	},
	handleBlur(e) {
		const that = this;
		clearTimeout(this._blurTime);
		this._blurTime = setTimeout(function(){
			that.setState({display: 'none', isDisabled: false});
		}, 100);
	},
	render() {
		let dateTime = '';
		const date = this.state.date;
		const time = this.state.time;
		// 这是输入框里面显示的值
		if(date && time){
			dateTime = date + ' ' + time;
		}
		return (
			<span className="cy-datepicker">
				<input
					ref="datePickerInput"
					type="text"
					placeholder={this.state.placeholder}
					disabled={this.state.isDisabled}
					className={this.props.highlight ? "cy-datepicker-input highlight-error normal-input" : "cy-datepicker-input normal-input"}
					onFocus={this.handleFocus}
					onChange={this.handleChange}
					value={dateTime} />
				<Calendar ref="calendar" {...this.state}
					handleBlur={this.handleBlur}
					handleDetermine={this.handleDetermine}
					handleClick4Time={this.handleClick4Time}
					handleClick4DateTime={this.handleClick4DateTime} />
			</span>
		);
	}
});

export default Datepicker;
