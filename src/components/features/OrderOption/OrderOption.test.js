import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='dropdown' name='nazwa_komponentu' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const compTitle = 'Lorem ipsum';
    const component = shallow(<OrderOption type='dropdown' name={compTitle} />);

    expect(component.find('h3.title').text()).toEqual(compTitle);

  });
});
