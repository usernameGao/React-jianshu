import { constants } from './index';
import { fromJS } from 'immutable'; //让数据不可改变的一个库，防止state被改变

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
        return state.merge({
          title: action.title,
          content: action.content
        })
    default:
      return state;
  }
}