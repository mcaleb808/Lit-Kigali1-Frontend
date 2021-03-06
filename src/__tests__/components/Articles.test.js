import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Articles, mapStateToProps, mapDispatchToProps } from '../../components/Article/Articles';
import { articleData } from '../../__mocks__/dummyData';
import initialState from '../../redux/initialState';

let wrapper;
const props = {
  loading: true,
  articles: [articleData],
  currentUser: {
    username: 'username',
  },
  getArticles: jest.fn().mockImplementation(() => Promise.resolve({ status: 200 })),
  match: {
    params: {
      articleSlug: 'article-slug',
    },
  },
  history: { push: jest.fn() },
  location: {
    search: '?page=1',
  },
};

describe('<Articles />', () => {
  beforeEach(() => {
    wrapper = mount(<Articles {...props} />);
  });
  test('should render the <Article />', () => {
    const renderedValue = renderer.create(<Articles {...props} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  test('should render <Article /> with articles', () => {
    wrapper = mount(<Articles {...props} />);
    wrapper.instance().renderArticles();
    expect(wrapper.props().articles).toBeDefined();
  });

  test('should call `onSearch`', () => {
    const value = '1234';
    wrapper.instance().onSearch(value);
    expect(wrapper.state().words).toBe(value);
  });

  describe('when clicking on `onSelectFilter` button', () => {
    beforeEach(() => {
      wrapper = mount(<Articles {...props} />);
    });
    test('should set `filterBy` to `title`', () => {
      wrapper.find('span[data-el="span-title"]').simulate('click');
      expect(wrapper.state().filterBy).toBe('title');
    });

    test('should set `filterBy` to `author`', () => {
      wrapper.find('span[data-el="span-author"]').simulate('click');
      expect(wrapper.state().filterBy).toBe('author');
    });

    test('should set `filterBy` to `tag`', () => {
      wrapper.find('span[data-el="span-tag"]').simulate('click');
      expect(wrapper.state().filterBy).toBe('tag');
    });
  });

  describe('reducers', () => {
    test('should initialize the component state', () => {
      const state = mapStateToProps(initialState);
      expect(state).toHaveProperty('loading');
      expect(state).toHaveProperty('articles');
      expect(state).toHaveProperty('submitting');
      expect(state).toHaveProperty('currentUser');
    });
  });

  describe('actions creators', () => {
    test('should call getArticles action without arguments', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).getArticles();
      expect(dispatch).toHaveBeenCalled();
    });

    test('should call getArticles action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).getArticles({ page: 1 });
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
