import React from 'react';

let CalendarDateBodyHeader = React.createClass({
  render(){
		const arrWeek = ['日', '一', '二', '三', '四', '五', '六'];
		return (
			<thead>
				<tr>
					{
						arrWeek.map(function(item, index){
							return (<th key={index}>{item}</th>);
						})
					}
				</tr>
			</thead>
		);
	}
});

export default CalendarDateBodyHeader;
