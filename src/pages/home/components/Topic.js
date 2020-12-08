import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
          return  <TopicItem key = {item.get('id')}>{item.get('title')}</TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}

//获取redux数据
const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);