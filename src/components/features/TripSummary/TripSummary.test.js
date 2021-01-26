import React from 'react';
import {shallow} from 'enzyme';
import TripSummmary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct url', () => {
    const componentId = 'xyz';
    const expectedUrl = '/trip/xyz';
    const component = shallow(<TripSummmary id={componentId} tags={['tag1','tag2']} image='' name='' cost='' days={1}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedUrl);
    // expect(component.find('Link').prop('to')).toEqual(expectedUrl);

    // console.log(component.debug());
  });

  it('should render img with correct src and alt', () => {
    const component = shallow(<TripSummmary image={'Lorem'} name={'Ipsum'} tags={['tag1','tag2']} id='' cost='' days={1}/>);
    expect(component.find('img').prop('src')).toEqual('Lorem');
    expect(component.find('img').prop('alt')).toEqual('Ipsum');
    // console.log(component.debug());
  });

  it('should render correct name, days', () => {
    const compName = 'USA';
    const compCost = '$10.000';
    const compDays = 7;
    const component = shallow(<TripSummmary name={compName} cost={compCost} days={compDays} tags={['tag1','tag2']} image='' id=''/>);
    expect(component.find('h3.title').text()).toEqual(compName);
    expect(component.find('.details span:first-child').text()).toEqual(compDays + ' days');
    // expect(component.find('.details span:last-child').text()).toEqual('from ' + compCost);
    // expect(component.find('.details span').at(0).text()).toEqual(compDays + ' days');
    // expect(component.find('.details span').at(1).text()).toEqual('from ' + compCost);
    // console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummmary />)).toThrow();
  });

  it('should render correct tags', () => {
    const compTags = ['tag1','tag2', 'tag3'];
    // const component = shallow(<TripSummmary tags={['tag1','tag2', 'tag3']}/>);
    const component = shallow(<TripSummmary tags={compTags} id='' image='' name='' cost='' days={1}/>);
    expect(component.find('.tags span').at(0).text()).toEqual(compTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(compTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(compTags[2]);
  });

  it('should not render div, if props tags is false', () => {
    const component = shallow(<TripSummmary tags={[]} id='' image='' name='' cost='' days={1}/>);
    // console.log(component.debug());
    // expect(component.hasClass('.tags')).toBe(false);
    expect(component.hasClass('.tags')).toBe(false);
  });

  it('renders componen TripPrice', () => {
    const component = shallow(<TripSummmary tags={[]} id='' image='' name='' cost='' days={1}/>);
    expect(component.find('TripPrice').length).toBe(1);
    console.log(component.debug());
  });
});

// const trueDate = Date;
// const mockDate = customDate => class extends Date {
//   constructor(...args) {
//     if(args.length){
//       super(...args);
//     } else {
//       super(customDate);
//     }
//     return this;
//   }
//   static now(){
//     return (new Date(customDate)).getTime();
//   }
// };

// const checkDescriptionAtTime = (time, expectedDescription) => {
//   it(`should show correct price at ${time}`, () => {
//     global.Date = mockDate(`2019-05-14T${time}:59:59.135Z`);

//     const component = shallow(<TripSummmary tags={[]} id='' image='' name='' cost='' days={1}/>);
//     const renderedTime = component.find('.details span').at(1).text();
//     expect(renderedTime).toContain(expectedDescription);

//     global.Date = trueDate;
//     console.log(component.debug());
//   });
// };

// describe('Component TripSummary with mocked Hour', () => {
//   // const customDate = '2019-05-14T11:57:58.135Z';

//   checkDescriptionAtTime('11', 'Standard');
//   checkDescriptionAtTime('12', 'Special');
// });
