import React, { Component } from 'react';

//components
import Routes from "./components/routes";
import Nav from "./components/nav";

//impor the store from the store file
import store from "./store/store";

//Provider from react-redux
import {Provider} from "react-redux";

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
          <Routes/>
        </div>
      </Provider>
    );
  }
}

export default App;
