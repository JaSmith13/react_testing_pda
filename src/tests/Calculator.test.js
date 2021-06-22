import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 and 4 to get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  })

  it('should subtract 4 from 7 to get 3', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should multiply 3 and 5 to get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should divide 21 by 7 to get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217')
  })  

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonAdd = container.find('#operator_add');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    buttonAdd.simulate('click')
    button1.simulate('click');
    buttonAdd.simulate('click')
    button7.simulate('click');
    buttonDivide.simulate('click')
    button2.simulate('click')
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  })

  it('should clear the running total without affecting the calculation', () => {
    const button4 = container.find('#number4');
    const button6 = container.find('#number6');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    const buttonClear = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonAdd.simulate('click');
    button6.simulate('click');
    buttonClear.simulate('click');
    expect(runningTotal.text()).toEqual('0')
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('4')
  })
})
