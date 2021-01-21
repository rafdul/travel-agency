import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'title title',
  promoDescription: 'Cum sociis natoque penatibus',
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
    expect(component.exists(select.promoDescription)).toEqual(true);
    // expect(component.find('h3').hasClass('title')).toEqual(true);
    // expect(component.find('div').some('.countdown')).toEqual(true);
    // console.log(component.debug());
  });

  it('should render correct heading from props', () => {
    const component = shallow(<HappyHourAd /*{...mockProps}*/ title={mockProps.title} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    // console.log(component.debug());
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

    const component = shallow(<HappyHourAd {...mockProps} description={mockProps.promoDescription}/>);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    console.log(component.debug());
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  // const customDate = '2019-05-14T11:57:58.135Z';

  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

/* czy odliczanie co sekundę zmniejsza wyświetlaną liczbę*/
const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
    // console.log(component.debug());
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {

  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60*60, 22 * 60 * 60 + '');

});

/* czy komunikat wyświetla informację o promocji przy otwarciu strony */
describe('Component HappyHourAd with mocked promo description betwen hours 12-1', () => {

  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:23:19', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});

/* czy komunikat wyświetla informację o promocji, kiedy odliczanie dotarło do zera */
describe('Component HappyHourAd with mocked Date, delay and promo description', () => {

  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('12:00:00', 1, mockProps.promoDescription);
  checkDescriptionAfterTime('12:02:12', 1, mockProps.promoDescription);

});

