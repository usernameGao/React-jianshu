import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { getMoreList, articleList, page } = this.props;
    return (
      <div>
        {
          articleList.map((item) => {
            return (
              <Link key={item.get('id')} to={'/detail/' + item.get('id')} style={{ textDecoration: 'none' }}>
                <ListItem >
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'page'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState, mapDispatch)(List);