// Action creators
export const requestPrediction = (formData) => ({
  type: "PREDICTION_REQUEST",
  payload: formData,
});

export const predictionSuccess = (data) => ({
  type: "PREDICTION_SUCCESS",
  payload: data,
});

export const predictionFailure = (error) => ({
  type: "PREDICTION_FAILURE",
  payload: error,
});

export const clearPrediction = () => ({ type: "PREDICTION_CLEAR" });
