// actions/index.js
import { generateDesign } from "../api";

export const GENERATE_DESIGN_REQUEST = "GENERATE_DESIGN_REQUEST";
export const GENERATE_DESIGN_SUCCESS = "GENERATE_DESIGN_SUCCESS";
export const GENERATE_DESIGN_FAILURE = "GENERATE_DESIGN_FAILURE";

export const generateDesignAction = (payload, headers) => async (dispatch) => {
  dispatch({ type: GENERATE_DESIGN_REQUEST });

  try {
    const data = await generateDesign(payload, headers);
    dispatch({ type: GENERATE_DESIGN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GENERATE_DESIGN_FAILURE, payload: error.message });
  }
};
