import React from 'react';

let CalendarDateBodyCol = React.createClass({
  getDefaultProps() {

  },
  render() {
		let arrHtml = [];
    let _aHtml = null
    let _date = '';
    const props = this.props;
    const _time = props.hours+':'+props.minutes+':'+props.seconds;
		for(let i = 0; i < 7; i++){
			_date = props.arrDate[props.rowIndex*7 + i];
			_aHtml = null;
			if(_date){
				_aHtml = <a className={(parseInt(_date.split('-')[2]) == props.date) ? 'current' : ''} onClick={props.handleClick.bind(null, _date, _time)}>{_date.split('-')[2]}</a>;
			}
			arrHtml.push(
				<td key={props.rowIndex*7 + i}>
					{_aHtml}
				</td>
			);
		}
		return (
			<tr key={props.rowIndex}>
				{arrHtml}
			</tr>
		);
	}
});

export default CalendarDateBodyCol;
