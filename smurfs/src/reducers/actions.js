//importing axios
import axios from 'axios';

//Define action types plus anticipated transitions

//FIRST ACTION below >>>
//When smurf is fetched from API
export const FETCH_SMURF = 'FETCH_SMURF';

//define action for fetch success
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';

//for fetch error
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

//SECOND ACTION below >>>
//After successfully fetching SMURF, we can add
export const ADD_SMURF = 'ADD_SMURF'; //basically the C part of the CRUD flow

//or delete
export const DELETE_SMURF = 'DELETE_SMURF';

//Update smurf...
export const UPDATE_SMURF ='UPDATE_SMURF';

//define success/fail states of adding smurf
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

//Define actions here
export const fetchSmurfs = ()=>{
    const promise = axios.get ('http://localhost:3333/smurfs');
    return dispatch => {
      dispatch({type: FETCH_SMURF});
      promise
      .then(res=> {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type:FETCH_SMURF_ERROR});
      })
    }
  };

  export const addSmurf = newSmurf => dispatch =>{
    dispatch({type: ADD_SMURF})
   axios.post('http://localhost:3333/smurfs', newSmurf)
   .then(res =>{
     dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
   })
   .catch(err => {
     dispatch({ type: ADD_SMURF_FAILURE, payload: err})
   })
  };  
