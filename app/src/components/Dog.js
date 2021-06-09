import React, { useEffect } from 'react';
import '../App.css';
import { connect } from 'react-redux';

import { getDog } from '../actions';

const Dog = props => {
  const { currentPhotoURL, isFetching, error, dispatch } = props;

  useEffect(() => {
    dispatch(getDog());
  }, [])

  const getNewDog = () => {
    dispatch(getDog());
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }
  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }
  return (
    <div className='dog-container'>
      {
        currentPhotoURL &&
        <div className='img-container'>
          <img src={currentPhotoURL} alt='dog pic'/>
        </div>
      }
      <button onClick={getNewDog}>Find a New Dog Pic!</button>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPhotoURL: state.currentPhotoURL,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps)(Dog);