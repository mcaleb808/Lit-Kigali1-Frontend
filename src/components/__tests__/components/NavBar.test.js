import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../NavBar/NavBar';

describe('<NavBar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  test('should render the NavBar', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the NavBar', () => {
    expect(wrapper.state().hamburger).toBeFalsy();
  });

  describe('when clicking on the `toggle-menu button`', () => {
    beforeEach(() => {
      wrapper.find('.toggle-menu').simulate('click');
    });
    afterEach(() => {
      wrapper.setState({ hamburger: false });
    });

    test('changes the `hamburger state` to true', () => {
      expect(wrapper.state().hamburger).toBeTruthy();
    });

    test('changes the `hamburger state` to false', () => {
      wrapper.find('.toggle-menu').simulate('click');
      expect(wrapper.state().hamburger).toBeFalsy();
    });
  });
});