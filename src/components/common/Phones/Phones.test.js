import React from 'react';
import {shallow} from 'enzyme';
import Phones from './Phones';

describe('Component Phones', () => {
  it('should render correct', () => {
    const component = shallow(<Phones/>);
    expect(component).toBeTruthy();
  });

  /* test działał zanim wprowadziłem funkcję chooseNumber w Phones.js */
  /*it('renders phone number from props', () => {
    const component = shallow(<Phones phone='987 654 321'/>);
    expect(component.text()).toEqual('987 654 321');
    console.log(component.debug());
  });*/
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
    // console.log(component.debug());
  });
};

describe('Component TripSummary with mocked Hour', () => {

  checkDescriptionAtTime('08', '678.243.8455');
  checkDescriptionAtTime('11', '678.243.8455');
  checkDescriptionAtTime('12', '278.443.6443');
  checkDescriptionAtTime('15', '278.443.6443');
  checkDescriptionAtTime('16', '167.280.3970');
  checkDescriptionAtTime('21', '167.280.3970');
  checkDescriptionAtTime('22', 'The Office opens at 8 UTC');
  checkDescriptionAtTime('07', 'The Office opens at 8 UTC');
});
