import React from 'react';
import {shallow} from 'enzyme';
import TripSummmary from './TripSummary';
// import {Link} from 'react-router-dom';

describe('Component TripSummary', () => {
  it('should render correct url', () => {
    const componentId = 'xyz';
    const expectedUrl = '/trip/xyz';
    const component = shallow(<TripSummmary id={componentId} tags={['tag1','tag2']}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedUrl);
    // expect(component.find('Link').prop('to')).toEqual(expectedUrl);

    // console.log(component.debug());
  });

  it('should render img with correct src and alt', () => {
    const component = shallow(<TripSummmary image={'Lorem'} name={'Ipsum'} tags={['tag1','tag2']}/>);
    expect(component.find('img').prop('src')).toEqual('Lorem');
    expect(component.find('img').prop('alt')).toEqual('Ipsum');
    // console.log(component.debug());
  });

  it('should render correct name, cost, days', () => {
    const compName = 'USA';
    const compCost = '$10.000';
    const compDays = 7;
    const component = shallow(<TripSummmary name={compName} cost={compCost} days={compDays} tags={['tag1','tag2']}/>);
    expect(component.find('h3.title').text()).toEqual(compName);
    expect(component.find('.details span:first-child').text()).toEqual(compDays + ' days');
    expect(component.find('.details span:last-child').text()).toEqual('from ' + compCost);
    // expect(component.find('.details span').at(0).text()).toEqual(compDays + ' days');
    // expect(component.find('.details span').at(1).text()).toEqual('from ' + compCost);
    // console.log(component.debug());
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummmary />)).toThrow();
  });

  it('should render correct tags', () => {
    const compTags = ['tag1','tag2', 'tag3'];
    // const component = shallow(<TripSummmary tags={['tag1','tag2', 'tag3']}/>);
    const component = shallow(<TripSummmary tags={compTags}/>);
    expect(component.find('.tags span').at(0).text()).toEqual(compTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(compTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(compTags[2]);
  });

  it('should not render div, if props tags is false', () => {
    const component = shallow(<TripSummmary tags={[]}/>);
    console.log(component.debug());
    expect(component.hasClass('.tags')).toBe(false);
  });
});
