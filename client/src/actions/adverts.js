import request from "superagent";

export const ADVERTS_FETCHED = "ADVERTS_FETCHED";
export const ADVERT_FETCHED = 'ADVERT_FETCHED'

const advertsFetched = adverts => ({
  type: ADVERTS_FETCHED,
  adverts
});

const advertFetched = advert => ({
  type: ADVERT_FETCHED,
  advert
})

export const loadAdverts = () => (dispatch) => {
  //this to check if there are adverts already fetched
//   if (getState().adverts) return;

  request(`http://localhost:4000/adverts`)
    .then(response => {
      dispatch(advertsFetched(response.body.adverts));
      
    })
    .catch(console.error);
};

export const loadAdvert = (id) => (dispatch) => {
  request(`http://localhost:4000/adverts/${id}`)
    .then(response => {
      console.log(response.body)
      dispatch(advertFetched(response.body))
    })
    .catch(console.error)
}


export const ADVERT_CREATE = 'ADVERT_CREATE'



const createAdvertSuccess = advert => ({
  type: ADVERT_CREATE,
  advert
})

export const createAdvert = (data) => dispatch => {
  request
    .post(`http://localhost:4000/adverts`)
    .send(data)
    .then(response => {
      dispatch(createAdvertSuccess(response.body))
    })
    .catch(console.error)
}