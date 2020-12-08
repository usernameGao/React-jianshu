import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as logoutCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchWrapper,
  SearchInfoItem,
  Addition,
  Button
} from './style'




class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'>
            <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          {
            login ?
              <NavItem onClick={logout} className="right">退出</NavItem>
              :
              <Link to='/login'>
                <NavItem className="right">登录</NavItem>
              </Link>
          }
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</span>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to="/write">
              <Button className="writting"><span className="iconfont">&#xe61b;</span>写文章</Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

  //控制搜索信息框显示函数
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS(); //list JS对象
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}

//无状态组件，更快

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList()); //点击搜索框是获取搜索框信息
      dispatch(actionCreators.searchFocus()); //获取焦点
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(logoutCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);