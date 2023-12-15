// App.js
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";
import InteractiveImage from "./components/InteractiveImage";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <InteractiveImage />
      </div>
    </Provider>
  );
};

export default App;


