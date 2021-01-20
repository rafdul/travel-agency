import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
  description: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour Lorem ipsum',
  description: 'It`s your time! Take advantage of Happy Hour! All offers 20% off!',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render title and countdown', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    expect(component.exists(select.title)).toBe(true);
    expect(component.exists(select.description)).toEqual(true);
    // expect(component.find('h3').hasClass('title')).toEqual(true);
    // expect(component.find('div').some('.countdown')).toEqual(true);
    // console.log(component.debug());
  });

  it('should render correct heading from props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    console.log(component.debug());
  });
});


/* czy komponent potrafi ustalić na samym początku, ile czasu pozostało do rozpoczęcia promocji */
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
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  // const customDate = '2019-05-14T11:57:58.135Z';

  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});
