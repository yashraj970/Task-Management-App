import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./pages/Home/Home";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
