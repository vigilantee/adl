import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./reducers/index";
import rootSaga from "./sagas/index";
import Login from "./pages/login";

const persistConfig = {
  key: "root",
  //whitelist: [`LoginReducer`, `UserReducer`, `CreateTaskReducer`, `EditTaskReducer`, `InboxReducer`, `storeDetailReducer`, `getTasksReducer`, `CRUDREDUCER`, `FilterReducer`,`TableReducer`],
  whitelist: [`LoginReducer`, `UserReducer`],
  storage
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [];
const enhancers = [];
middleware.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middleware));
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(...enhancers));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Login />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
