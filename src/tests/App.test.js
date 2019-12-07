import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

it('Countdown component was rendered by App', () => {
  const myComponent = shallow(<App />);
  expect(myComponent.find('Countdown')).toHaveLength(1);
});

it('renders properly', () => {
  const myComponent = shallow(<App />);
  expect(myComponent).toMatchSnapshot();
});
