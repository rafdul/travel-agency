import React from 'react';
import {shallow} from 'enzyme';
import CounterToSummer from './CounterToSummer';

const select = {
  info: '.info',
  counter: '.counter',
};

const mockProps = {
  title: 'dni do lata jeszcze zostało',
};

describe('Component CounterToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<CounterToSummer />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render counder', () => {
    const component = shallow(<CounterToSummer />);
    expect(component.exists(select.counter)).toBe(true);
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
    return (new Date(customDate));
  }
};

const checkDescriptionAtTime = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    // format daty '2019-05-14T11:57:58.135Z';
    global.Date = mockDate(date);

    const component = shallow(<CounterToSummer {...mockProps}/>);
    const renderedDate = component.find(select.counter).text();
    expect(renderedDate).toEqual(expectedDescription);

    global.Date = trueDate;
    // console.log(component.debug());
  });
};

describe('Component CounterToSummer with mocked Date', () => {

  checkDescriptionAtTime('09.24.2021', '270');
  checkDescriptionAtTime('12.31.2021', '172');
  checkDescriptionAtTime('01.01.2022', '171');
  checkDescriptionAtTime('06.20.2021', '1');
});

describe('Component CounterToSummer with mocked Date during summer', () => {

  checkDescriptionAtTime('06.21.2021', '0');
  checkDescriptionAtTime('08.31.2021', '0');
  checkDescriptionAtTime('09.23.2021', '0');
});

