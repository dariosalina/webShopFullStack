import { ADVERTS_FETCHED, ADVERT_CREATE } from "../actions/adverts";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADVERTS_FETCHED:
      return action.adverts;

    case ADVERT_CREATE:
      return [...state, action.event];

    default:
      return state;
  }
};
