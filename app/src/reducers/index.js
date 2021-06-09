import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PHOTO } from '../actions';

const initialState = {
  currentPhotoURL: '',
  likedPhotoURLs: [],
  error: '',
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH_START):
      return ({
        ...state,
        isFetching: true
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        currentPhotoURL: action.payload,
        isFetching: false        
      })
    case(FETCH_FAIL):
      return ({
        ...state,
        isFetching: false,
        error: action.payload
      })
    case(ADD_PHOTO):
      return ({
        ...state,
        likedPhotoURLs: [...state.likedPhotoURLs, action.payload]
      })
    default:
      return state;
  }
}