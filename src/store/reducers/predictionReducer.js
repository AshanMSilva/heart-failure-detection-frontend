const initialState = {
  loading: false,
  result: null,
  error: null,
};

export const predictionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PREDICTION_REQUEST":
      return { ...state, loading: true, error: null };
    case "PREDICTION_SUCCESS":
      return { ...state, loading: false, result: action.payload };
    case "PREDICTION_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "PREDICTION_CLEAR":
      return initialState;
    default:
      return state;
  }
};
