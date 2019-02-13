import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdvertsListContainer from './components/AdvertsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdvertsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;