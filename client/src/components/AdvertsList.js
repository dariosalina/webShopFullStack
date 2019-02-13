import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdvertsList extends Component {
  renderAdvertsList(advert) {
    return (
      <li key={advert.id}>
        <Link to={`/adverts/${advert.id}`}>
         {advert.title} 
         </Link>
         {advert.description}
      </li>
    );
  }

  render() {
    const Adverts = this.props.adverts;
    console.log(Adverts)

    return (
      <div>
        <h1>---</h1>
        <h3> ...</h3>
        {!Adverts && "Loading"}
        {Adverts && <ul>{Object.values(Adverts).map(this.renderAdvertsList)}</ul>}
      </div>
    );
  }
}
