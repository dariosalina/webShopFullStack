import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AdvertsListContainer from "./components/AdvertsListContainer";
import AdvertDetailsContainer from "./components/AdvertDetailsContainer";
import CreateAdvertContainer from "./components/CreateAdvertContainer";
import LoginPage from "./components/login/LoginPage";
import LogOut from "./components/logout/LogOut";
import SignUpPage from "./components/signup/SignUpPage";
// import Home from "./components/Home";
import "./App.scss";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary--main">Bakeka</h1>

            <nav className="heading-primary--sub">
              <ul className="navigation">
                <li className="btn btn-main" href="#" title="Home">
                  <Link to={`/signup`}>SignUp</Link>
                </li>
                <li className="btn btn-main" href="#" title="Home">
                  {" "}
                  <Link to={`/login`}>Login</Link>
                </li>
                <li className="btn btn-main" href="#" title="About">
                  <Link to={`/adverts`}>Adverts</Link>
                </li>
                <li className="btn btn-main" href="#" title="Store">
                  <Link to={`/logout`}>LogOut</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <body>
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/adverts" component={AdvertsListContainer} />
            <Route
              exact
              path="/adverts/:id"
              component={AdvertDetailsContainer}
            />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/advert" component={CreateAdvertContainer} />
          </Switch>
        </body>
      </Provider>
    );
  }
}

export default App;
