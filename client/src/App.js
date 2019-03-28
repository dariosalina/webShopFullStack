import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import AdvertsListContainer from "./components/AdvertsListContainer";
import AdvertDetailsContainer from "./components/AdvertDetailsContainer";
import CreateAdvertContainer from "./components/CreateAdvertContainer";
import LoginPage from "./components/login/LoginPage";
import LogOut from "./components/logout/LogOut";
import SignUpPage from "./components/signup/SignUpPage";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="pa3 pa4-ns">
          <h1 class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">
            Bakeka
          </h1>
          <Route path="/" component={Home} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/adverts" exact component={AdvertsListContainer} />
          <Route exact path="/adverts/:id" component={AdvertDetailsContainer} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/advert" component={CreateAdvertContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
