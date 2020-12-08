import { constants } from './index';
import { fromJS } from 'immutable'; //让数据不可改变的一个库，防止state被改变

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}