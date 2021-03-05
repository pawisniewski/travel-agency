import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.jpg' tags={[]} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
  });

  it('image should have correct src and alt', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='trip' tags={[]} />);
    const expectedImgSrc = 'image.jpg';
    const expectedImgAlt = 'trip';
    expect(component.find('img').prop('src')).toEqual(expectedImgSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImgAlt);
  });

  it('should render correctly props: name, cost, days', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='trip' cost='123' days={7} tags={[]} />);
    const expectedName = 'trip';
    const expectedCost = 'from 123';
    const expectedDays = '7 days';
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedDays);
    expect(component.find('.details').childAt(1).text()).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  it('should render span from arrat tags in correct order', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={['first', 'second', 'third']} />);
    expect(component.find('.tags').childAt(0).text()).toEqual('first');
    expect(component.find('.tags').childAt(1).text()).toEqual('second');
    expect(component.find('.tags').childAt(2).text()).toEqual('third');
  });

  it('should not render tags when array is not given', () => {
    const component = shallow(<TripSummary image='image.jpg' tags={[]} />);
    expect(component.find('.tags')).toMatchObject({});
  });
});