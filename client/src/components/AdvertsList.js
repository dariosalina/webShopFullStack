import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdvertsList extends Component {
  renderAdvertsList(advert) {
    return (
      <li key={advert.id}>
        <p className="title"><Link to={`/adverts/${advert.id}`}>
         {advert.title} 
         </Link></p>
         <p>{advert.description}</p>
      </li>
    );
  }

  render() {
    const Adverts = this.props.adverts;
    

    return (
      <div>
        <h1>Here you can find a list of advertisment:</h1>
        <h3> Click on the title to see the details</h3>
        {!Adverts && "Loading"}
        {Adverts && <ul>{Object.values(Adverts).map(this.renderAdvertsList)}</ul>}
      </div>
    );
  }
}
