import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  summerDescription: '.summerDescription',
};

const mockProps = {
  summerDescription: 'testDescription',
};

describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
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

const checkDescriptionAtDate = (day, expectedDescription) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}T00:00:00.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDays = component.find(select.summerDescription).text();
    expect(renderedDays).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2021-06-20', '1 day to summer!');
  checkDescriptionAtDate('2021-06-21', '');
  checkDescriptionAtDate('2021-09-23', '');
  checkDescriptionAtDate('2021-09-24', '270 days to summer!');
});
