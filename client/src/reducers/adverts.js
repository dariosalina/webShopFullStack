import { ADVERTS_FETCHED } from "../actions/adverts";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADVERTS_FETCHED:
      return action.events;

    default:
      return state;
  }
};
