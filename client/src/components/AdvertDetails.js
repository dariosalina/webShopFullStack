import React from 'react'

export default function AdvertDetails(props) { 
    
    const advert = props.advert
    return (
        
      <div>
        {!advert && "Loading"}
        {advert && (
          <span>
            <h1>{advert.title}</h1>
            <p>{advert.price}</p>
            <img alt={advert.description}>{advert.picture}</img>
            <p>{advert.description}</p>
            <p>{advert.phone_number}</p>
            <p>{advert.email}</p>
          </span>
        )}
      </div>
    );
  }
