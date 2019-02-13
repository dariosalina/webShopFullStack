import { ADVERT_FETCHED } from "../actions/adverts";

export default (state = null, action = {}) => {
   
  switch (action.type) {
    case ADVERT_FETCHED:
    console.log(action)
    return action.advert;
    
    default:
      return state;
    }
};
