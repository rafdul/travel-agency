import React from 'react';
import {shallow} from 'enzyme';
import Phones from './Phones';
import settings from '../../../data/settings';


const phone1 = settings.phone.nr1;
const phone2 = settings.phone.nr2;
const phone3 = settings.phone.nr3;
const info = settings.phone.info;

describe('Component Phones', () => {
  it('should render correct', () => {
    const component = shallow(<Phones/>);
    expect(component).toBeTruthy();
  });

  it('renders phone number ', () => {
    const component = shallow(<Phones />);
    expect(component.text()).toEqual(phone1);
    console.log(component.debug());
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
    return (new Date(customDate)).getUTCTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct phone number at ${time}`, () => {
    global.Date = mockDate(`2021-01-14T${time}:59:59.135Z`);

    const component = shallow(<Phones phone=''/>);
    expect(component.text()).toEqual(expectedDescription);

    global.Date = trueDate;
    console.log(component.debug());
  });
};

describe('Component TripSummary with mocked Hour', () => {

  checkDescriptionAtTime('08', phone1);
  checkDescriptionAtTime('11', phone1);
  checkDescriptionAtTime('12', phone2);
  checkDescriptionAtTime('15', phone2);
  checkDescriptionAtTime('16', phone3);
  checkDescriptionAtTime('21', phone3);
  checkDescriptionAtTime('22', info);
  checkDescriptionAtTime('07', info);
});
