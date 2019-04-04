import { LOGIN } from '../actions-types';

const initialState = {
  user: {},
  articles: [],
  favorites: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;