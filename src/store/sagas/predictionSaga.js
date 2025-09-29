import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";
import { toast } from "react-toastify";

import {
  predictionSuccess,
  predictionFailure,
} from "../actions/predictionActions";

// API call
function postPredictionAPI(formData) {
  return axios.post("http://localhost:8000/api/hfprediction/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

// Worker saga
function* fetchPrediction(action) {
  const { submitData, navigate } = action.payload;
  console.log(submitData);
  var toastId;
  try {
    toastId = toast.loading("Processing prediction...");
    const response = yield call(postPredictionAPI, submitData);
    yield put(predictionSuccess(response.data));
    console.log(response);
    toast.dismiss(toastId);
    toast.success("Prediction completed!");
    navigate("/prediction");
  } catch (error) {
    yield put(
      predictionFailure(error.response?.data?.message || error.message)
    );
    console.log(error);
    toast.dismiss(toastId);
    toast.error("Prediction failed!");
  }
}

// Watcher saga
function* watchPrediction() {
  yield takeLatest("PREDICTION_REQUEST", fetchPrediction);
}

// Root saga
export default function* rootSaga() {
  yield all([watchPrediction()]);
}
