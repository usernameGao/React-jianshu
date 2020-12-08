import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
// import { DetailWrapper, Header, Content } from './style'

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input) => { this.account = input }} />
            <Input placeholder='密码' type='password' innerRef={(input) => { this.password = input }} />
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }

}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account, password));
  }
})
export default connect(mapState, mapDispatch)(Login);