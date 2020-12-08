import React, { PureComponent } from 'react'; 
//使用PureComponent会在渲染前进行浅比较，没发生改变就不会再渲染，
//但是当state，props频繁变化时还是使用Component，最好和immutable.js结合
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ?
            <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> :
            ''
        }

      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData());
    },
    changeScrollShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.changeShow(true));
      } else {
        dispatch(actionCreators.changeShow(false));
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home);