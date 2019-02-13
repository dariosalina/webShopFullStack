import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class AdvertsList extends Component {
  renderAdvertsList(advert) {
    return (
      <li key={advert.id}>
        {/* <Link to={`/events/${advert.id}`}> */}
         {advert.title}
         {advert.description}
         {/* </Link> */}
      </li>
    );
  }

  render() {
    const Adverts = this.props.adverts;
    return (
      <div>
        <h1>---</h1>
        <h3> ...</h3>
        {!Adverts && "Loading"}
        {Adverts && <ul>{Adverts.map(this.renderAdvertsList)}</ul>}
      </div>
    );
  }
}