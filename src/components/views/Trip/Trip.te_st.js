import React from 'react';
import { shallow } from 'enzyme';
import Trip from './Trip';
import ListItem from '../../common/ListItem/ListItem';


const mockProps = {
  error: 0,
  name: 'Lorem ipsum',
  image: 'Picture',
  cost: '1000',
  days: 10,
  description: 'Litwo ojczyzno moja ty jesteś jak zdrowie',
  country: {
    Japan: {
      capital: 'Tokyo',
      region: 'Asia',
      subregion: 'East Asia',
      population: 100000000,
      currencies: [
        {
          symbol: '$',
          name: 'dolars',
        },
        {
          symbol: 'eur',
          name: 'euro',
        },
      ],
      alpha3Code: 'eer84',
    },
  },
  intro: 'Intro',
  source: 'image',
};

describe('Component Trip', () => {
  it('renders without crashing', () =>{
    const component = shallow(<Trip {...mockProps}><ListItem title='Happy-hour-price'/></Trip>);
    expect(component.exists()).toBe(true);
    console.log(component);
  });
});




const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct content at ${time}`, () => {
    // global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const newDate = new Date(`December 25, 2020 ${time}`);

    const component = shallow(<Trip {...mockProps}><ListItem id='price_promo' title={newDate.getUTCHours() === 12 ? ('Happy-hour-price') : ('Standard price')} /></Trip>);
    // const renderedTime = component.hasClass('small');
    expect(component.text()).toBe(expectedDescription);


    console.log(component.debug());
  });
};

describe('Component Trip with mocked Hour', () => {
  // const customDate = '2019-05-14T11:57:58.135Z';

  checkDescriptionAtTime('11:59:59', 'Standard price');
  checkDescriptionAtTime('12:00:00', 'Happy-hour-price');
  // checkDescriptionAtTime('12:59:59', 1);
  // checkDescriptionAtTime('13:00:00', 1);
});
