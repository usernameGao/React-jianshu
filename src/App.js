import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import home from './pages/home';
import detail from './pages/detail/loadable.js';
import login from './pages/login';
import write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={home}></Route>
            <Route path='/login' exact component={login}></Route>
            <Route path='/write' exact component={write}></Route>
            <Route path='/detail/:id' exact component={detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
