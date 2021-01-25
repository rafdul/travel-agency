import React from 'react';
import { mount } from 'enzyme';
import Trip from './Trip';
import ListItem from '../../common/ListItem/ListItem';



const mockProps = {
  error: 'err',
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
    const component = mount(<Trip {...mockProps}><ListItem id='price_promo'/></Trip>);
    expect(component.exists()).toBe(true);
    console.log(component);
  });
});

describe('Component Trip', () => {
  it('renders without crashing', () =>{
    const component = mount(<Trip {...mockProps}><ListItem icon='money-bill-wave'/></Trip>);
    expect(component.exists()).toBe(true);
    console.log(component);
  });
});



const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`renders correct price for component Trip at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}:59:59.135Z`);

    const component = mount(<ListItem icon='money-bill-wave' title=''/>);
    const renderedTime = component.text();
    expect(renderedTime).toContain(expectedDescription);

    global.Date = trueDate;
    console.log(component.debug());
  });
};

describe('Component ListItem with mocked Hour', () => {
  // const customDate = '2019-05-14T11:57:58.135Z';

  checkDescriptionAtTime('11', 'Standard price');
  checkDescriptionAtTime('12', 'Happy-hour-price');
  checkDescriptionAtTime('13', 'Standard price');

});
