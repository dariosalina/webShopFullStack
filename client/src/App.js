import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdvertsListContainer from './components/AdvertsListContainer'
import AdvertDetailsContainer from './components/AdvertDetailsContainer'
import CreateAdvertContainer from './components/CreateAdvertContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdvertsListContainer} />
          <Route path="/adverts/:id" component={AdvertDetailsContainer} />
          <Route path="/advert" component={CreateAdvertContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;