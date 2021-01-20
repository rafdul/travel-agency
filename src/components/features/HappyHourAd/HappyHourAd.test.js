import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour Lorem ipsum',
  promoDescription: 'It`s your time! Take advantage of Happy Hour! All offers 20% off!',
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
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    console.log(component.debug());
  });
});
