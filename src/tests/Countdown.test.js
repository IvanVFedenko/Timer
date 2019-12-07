import React from 'react';
import Countdown from '../containers/countdown';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Countdown container initial', () => {
  const myComponent = shallow(<Countdown />);

  it('render initial', () => {
    expect(myComponent.find('div')).toHaveLength(1);
  });

  it('renders properly', () => {
    expect(myComponent).toMatchSnapshot();
  });

  it('ViewTimer component was rendered by Countdown', () => {
    expect(myComponent.find('ViewTimer')).toHaveLength(1);
  });
});

describe('Countdown methods', () => {
  const myComponent = shallow(<Countdown />);

  it('should populate the state', () => {
    expect(myComponent.state()).toEqual({
      reset: true,
      start: false,
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    });
  });

  it('should have a working method called startTimer', () => {
    myComponent.instance().startTimer();
    expect(myComponent.state()).toEqual({
      reset: false,
      start: true,
      timerOn: true,
      timerStart: 0,
      timerTime: 0
    });
  });

  it('should have a working method called resetTimer', () => {
    myComponent.instance().resetTimer();
    expect(myComponent.state()).toEqual({
      timerStart: 0,
      timerTime: 0,
      reset: true,
      start: false,
      timerOn: true
    });
  });
});
