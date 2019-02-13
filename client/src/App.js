import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdvertsListContainer from './components/AdvertsListContainer'
import AdvertDetailsContainer from './components/AdvertDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/home" exact component={AdvertsListContainer} />
          <Route path="/adverts/:id" component={AdvertDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;