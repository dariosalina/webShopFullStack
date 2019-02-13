import request from "superagent";

export const ADVERTS_FETCHED = "ADVERTS_FETCHED";

const advertsFetched = events => ({
  type: ADVERTS_FETCHED,
  events
});

export const loadAdverts = () => (dispatch, getState) => {
  //this to check if there are adverts already fetched
//   if (getState().adverts) return;

  request(`http://localhost:4000/home`)
    .then(response => {
      dispatch(advertsFetched(response.body));
    })
    .catch(console.error);
};
