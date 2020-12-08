import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle, WriterInfo, WriterItem, P, A } from '../style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
        </WriterTitle>
        <WriterInfo>
          {
            this.props.writerInfo.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <P>
                    {item.get('name')}
                    <A>关注</A>
                  </P>
                  <P className="intro">{item.get('intro')}</P>
                </WriterItem>
              )
            })
          }

        </WriterInfo>
      </WriterWrapper>
    )
  }

  componentDidMount() {
    this.props.getWriterInfo();
  }
}


const mapState = (state) => ({
  writerInfo: state.getIn(['home', 'writerInfo'])
})

const mapDispatch = (dispatch) => ({
  getWriterInfo() {
    dispatch(actionCreators.getWriterInfo());
  }
})
export default connect(mapState, mapDispatch)(Writer);