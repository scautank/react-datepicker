import '../assets/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Datepicker from '../index';

const Test = React.createClass({
    getInitialState: function() {
        return {
            time_start: ''
        };
    },
    handleSelect4Time: function (time) {
        console.log(time);
    },
    render: function() {
      return (<Datepicker
                value={this.state.time_start}
                highlight={false}
                placeholder="开始时间"
                onSelect={this.handleSelect4Time} />);
    }
});

ReactDOM.render(<Test />, document.getElementById('react-box'));
