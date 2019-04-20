import reducer from '../../redux/reducers/articleReducer';
import * as articleTypes from '../../redux/actions-types/articleTypes';
import { articleData } from '../../__mocks__/dummyData';

import store from '../../redux/store';

describe('currentUserReducer', () => {
  it('should return the initial `state`', () => {
    expect(reducer(undefined, {})).toEqual(store.getState().article);
  });

  it('should handle `CLEAR_ARTICLE_FORM`', () => {
    const expectedState = {
      type: articleTypes.CLEAR_ARTICLE_FORM,
    };
    expect(reducer({}, expectedState)).toEqual({});
  });

  it('should handle `SET_ARTICLE_FORM_INPUT`', () => {
    const payload = { field: 'username', value: 'usernane' };
    const expectedState = {
      type: articleTypes.SET_ARTICLE_FORM_INPUT,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      errors: [],
      message: '',
      [payload.field]: payload.value,
    });
  });

  it('should handle `SUBMIT_ARTICLE_FORM_SUCCESS`', () => {
    const payload = { message: 'SUCCESS' };
    const expectedState = {
      type: articleTypes.SUBMIT_ARTICLE_FORM_SUCCESS,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      ...payload,
      errors: [],
      submitting: false,
      success: true,
    });
  });

  it('should handle `SUBMIT_ARTICLE_FORM_FAILURE`', () => {
    const payload = { message: 'FAILURE' };
    const expectedState = {
      type: articleTypes.SUBMIT_ARTICLE_FORM_FAILURE,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      ...payload,
      errors: [],
      submitting: false,
      success: false,
    });
  });

  it('should handle `FETCHING_ARTICLE`', () => {
    const expectedState = {
      type: articleTypes.FETCHING_ARTICLE,
      payload: true,
    };
    expect(reducer({}, expectedState)).toEqual({
      loading: true,
    });
  });

  it('should handle `FETCHING_ARTICLE_SUCCESS`', () => {
    const payload = articleData;
    const expectedState = {
      type: articleTypes.FETCHING_ARTICLE_SUCCESS,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      article: payload,
      loading: false,
      success: true,
    });
  });

  it('should handle `FETCHING_ARTICLE_FAILURE`', () => {
    const payload = 'FAILURE';
    const expectedState = {
      type: articleTypes.FETCHING_ARTICLE_FAILURE,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      article: {},
      loading: false,
      success: false,
      message: payload,
    });
  });

  it('should handle `FETCHING_ALL_ARTICLE_SUCCESS`', () => {
    const payload = [articleData];
    const expectedState = {
      type: articleTypes.FETCHING_ALL_ARTICLE_SUCCESS,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      articles: payload,
      loading: false,
      success: true,
    });
  });

  it('should handle `FETCHING_ALL_ARTICLE_FAILURE`', () => {
    const payload = 'FAILURE';
    const expectedState = {
      type: articleTypes.FETCHING_ALL_ARTICLE_FAILURE,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      articles: [],
      loading: false,
      success: false,
      message: payload,
    });
  });

  it('should handle `SET_ARTICLE_RATE`', () => {
    const expectedState = {
      type: articleTypes.SET_ARTICLE_RATE,
      payload: articleData,
    };
    expect(reducer({}, expectedState)).toEqual({
      article: articleData,
    });
  });
});
