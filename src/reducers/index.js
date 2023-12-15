// using reducer to send the response back to the view component
import {
  GENERATE_DESIGN_REQUEST,
  GENERATE_DESIGN_SUCCESS,
  GENERATE_DESIGN_FAILURE,
} from "../actions";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_DESIGN_REQUEST:
      return { ...state, loading: true, error: null };
    case GENERATE_DESIGN_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case GENERATE_DESIGN_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
