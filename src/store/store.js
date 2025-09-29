import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { predictionReducer } from "./reducers/predictionReducer";
import rootSaga from "./sagas/predictionSaga";

const rootReducer = combineReducers({
  prediction: predictionReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
