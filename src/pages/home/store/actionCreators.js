import { constants } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const allHomeData = (data) => ({
  type: constants.ALL_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
});

const addHomeList = (data, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(data),
  nextPage
});

const writer = (data) => ({
  type: constants.WRITER_INFO,
  writer: fromJS(data)
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data;
      dispatch(allHomeData(data.data));
    }).catch(() => {
      console.log('err');
    })
  }
}


export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const data = res.data;
      dispatch(addHomeList(data.data, page + 1));
    }).catch(() => {
      console.log('err');
    })
  }
}

export const changeShow = (show) => ({
  type: constants.SHOW_CHANGE,
  show: fromJS(show)
})

export const getWriterInfo = () => {
  return (dispatch) => {
    axios.get('/api/writer.json').then((res) => {
      const data = res.data.data;
      dispatch(writer(data));
    })
  }
}