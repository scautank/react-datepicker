import React from 'react';

let CalendarTimeBodyCol = React.createClass({
  getDefaultProps() {
    return {
      col: 10,
      type: ''
    }
  },
  getTimeStr(curVal) {
    let sTime = '';
    const props = this.props;
    switch(props.type){
      case 'hours':
        sTime = curVal + ':' + props.minutes + ':' + props.seconds;
        break;
      case 'minutes':
        sTime = props.hours + ':' + curVal + ':' + props.seconds;
        break;
      case 'seconds':
        sTime = props.hours + ':' + props.minutes + ':' + curVal;
    }
    return sTime;
  },
  render() {
    const props = this.props;
    const rowIndex = props.rowIndex;
    const _date = props.year + '-' + props.month + '-' + props.date;
  	let arrHtml = [];
    let curVal = 0;
    let _time = '';
		for(let i = 0; i < props.col; i++){
			curVal = rowIndex * props.col + i;
			_time = this.getTimeStr(curVal);
			arrHtml.push(
				<td key={curVal}>
					<a className={(props[props.type] == curVal) ? "current": ""} onClick={props.handleClick.bind(null, _date, _time)}>{curVal}</a>
				</td>
			);
		}
		return (
			<tr>
				{arrHtml}
			</tr>
		);
	}
});

export default CalendarTimeBodyCol;
