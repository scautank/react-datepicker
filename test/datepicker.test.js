'use strict';

jest.unmock('../src/Datepicker');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Datepicker from '../src/Datepicker';

describe('datepicker component', () => {
    it('datepicker works', () => {
        const datepicker = ReactTestUtils.renderIntoDocument(
            <Datepicker
                placeholder="select time please" />
        );
        const input = ReactTestUtils.findRenderedDOMComponentWithClass(datepicker, 'cy-datepicker-input');
        const calendar = ReactTestUtils.findRenderedDOMComponentWithClass(datepicker, 'cy-calendar');

        expect(ReactDOM.findDOMNode(calendar).style.display).toEqual('none');
        ReactTestUtils.Simulate.focus(input);
        expect(ReactDOM.findDOMNode(calendar).style.display).toEqual('block');

        // 未完待续...

    });
});
