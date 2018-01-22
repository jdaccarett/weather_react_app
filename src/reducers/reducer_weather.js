import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]); //avoid state mutations in reducers. Return a complete new instance of state.
      // concat return a NEW ARRAY that contains all the old stuff and new stuff
      // therefore we are not mutating our state we are returning a new version of our state.
  }

  return state;
}
