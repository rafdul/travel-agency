import React from 'react';
import { shallow } from 'enzyme';
import Trip from './Trip';
import ListItem from '../../common/ListItem/ListItem';

const mockProps = {
  error: 'Error',
  name: 'Lorem ipsum',
  image: 'Picture',
  cost: '1000',
  days: 10,
  description: 'Litwo ojczyzno moja ty jesteś jak zdrowie',
  country: {},
  intro: 'Intro',
};

describe('Component Trip', () => {
  it('renders without crashing', () =>{
    const component = shallow(<Trip {...mockProps}><ListItem id='price_promo' /></Trip>);
    expect(component.exists()).toBe(true);
    console.log(component);
  });

});
