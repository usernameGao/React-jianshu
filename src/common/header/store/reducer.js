import { constants } from './index';
import { fromJS } from 'immutable'; //让数据不可改变的一个库，防止state被改变

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCUS:
      return state.set('focused', true);
    //immutable结合set方法会返回新对象
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}