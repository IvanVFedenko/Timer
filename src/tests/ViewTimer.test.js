import React from 'react';
import ViewTimer from '../components/viewTimer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { number, object } from 'prop-types';

Enzyme.configure({ adapter: new Adapter() });

describe('ViewTimer component initial', () => {
  const myComponent = shallow(<ViewTimer />);

  it('render initial', () => {
    expect(myComponent.find('div')).toHaveLength(4);
  });
  it('renders properly', () => {
    expect(myComponent).toMatchSnapshot();
  });
});

describe('testing ViewTimer component ', () => {
  it('snapshot header ', () => {
    const wrapper = shallow(<ViewTimer />);
    expect(wrapper.find('.Countdown-header').text()).toEqual('Countdown');
  });
});

describe('testing functionality', () => {
  it('startTimer callback calling', () => {
    let startTimer = jest.fn();
    const wrapper = shallow(<ViewTimer startTimer={startTimer} />);
    const startButton = wrapper.find('.Button-start');
    startButton.at(0).simulate('click');
    expect(startTimer).toBeCalled();
  });

  it('startFaster callback calling', () => {
    let startFaster = jest.fn();
    const wrapper = shallow(<ViewTimer startFaster={startFaster} />);
    const startButton = wrapper.find('.Button-start');
    startButton.at(1).simulate('click');
    expect(startFaster).toBeCalled();
  });

  it('startFastest callback calling', () => {
    let startFastest = jest.fn();
    const wrapper = shallow(<ViewTimer startFastest={startFastest} />);
    const startButton = wrapper.find('.Button-start');
    startButton.at(2).simulate('click');
    expect(startFastest).toBeCalled();
  });
});
