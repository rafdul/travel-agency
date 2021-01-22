import React from 'react';
import {shallow} from 'enzyme';
import CounterToSummer from './CounterToSummer';

const select = {
  info: '.info',
};

const mockProps = {
  title: 'Litwo ojczyzno moja...',
};

describe('Component CounterToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<CounterToSummer />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render title', () => {
    const component = shallow(<CounterToSummer />);
    expect(component.exists(select.info)).toBe(true);
    // console.log(component.debug());
  });

  it('should render correct title from props', () => {
    const component = shallow(<CounterToSummer title={mockProps.title}/>);
    expect(component.find(select.info).text()).toEqual(mockProps.title);
  });
});
