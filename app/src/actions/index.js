import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_PHOTO = 'ADD_PHOTO';

export const getDog = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        console.log(res);
        dispatch(fetchSuccess(res.data.message))
      })
      .catch(err => {
        dispatch(fetchFail(err.response.message))
      })
  }
}

export const fetchStart = () => {
  return ({ type: FETCH_START });
}

export const fetchSuccess = img => {
  return ({ type: FETCH_SUCCESS, payload: img });
}

export const fetchFail = message => {
  return ({ type: FETCH_FAIL, payload: message })
}