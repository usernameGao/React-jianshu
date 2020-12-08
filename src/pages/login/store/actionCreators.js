import axios from 'axios';
import { constants } from './index';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

const logoutChange = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false
})

export const login = (account, passworld) => {
  return (dispatch) => {
    axios.get('api/login.json?accout=' + account + '&passworld=' + passworld).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutChange());
  }
}