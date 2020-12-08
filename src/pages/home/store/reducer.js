import { constants } from './index';
import { fromJS } from 'immutable'; //让数据不可改变的一个库，防止state被改变

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerInfo: [],
  page: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ALL_DATA:
      // console.log(2222)
      // console.log(action.toJs());
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        page: action.nextPage
      });
    case constants.SHOW_CHANGE:
      return state.set('showScroll', action.show);
    case constants.WRITER_INFO:
      return state.set('writerInfo', action.writer);
    default:
      return state;
  }
}