import request from "superagent";

export const ADVERTS_FETCHED = "ADVERTS_FETCHED";
export const ADVERT_FETCHED = 'ADVERT_FETCHED'

const advertsFetched = events => ({
  type: ADVERTS_FETCHED,
  events
});

const advertFetched = event => ({
  type: ADVERT_FETCHED,
  event
})

export const loadAdverts = () => (dispatch, getState) => {
  //this to check if there are adverts already fetched
//   if (getState().adverts) return;

  request(`http://localhost:4000/home`)
    .then(response => {
      dispatch(advertsFetched(response.body.adverts));
      
    })
    .catch(console.error);
};

export const loadAdvert = (id) => (dispatch) => {
  request(`http://localhost:4000/adverts/${id}`)
    .then(response => {
      dispatch(advertFetched(response.body.adverts))
    })
    .catch(console.error)
}