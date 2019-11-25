import axios from 'axios';

export const getSmurfs = data => dispatch => {
  console.log("ACTION!")
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({type: "CALL_SUCCESS", payload: res.data});
    })
    .catch(err => {
      dispatch({type: "CALL_FAILURE", payload: err.response})
    });
}

export const addSmurf = data => dispatch => {
  console.log("addSmurf: data", data);
  axios
    .post(`http://localhost:3333/smurfs`, data)
    .then(res => {
      dispatch({type: "POST_SUCCESS", payload: data})
    })
    .catch(err => {
      dispatch({type: "POST_FAILURE", payload: err.response})
    })
}