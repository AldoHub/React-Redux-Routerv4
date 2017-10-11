import React, { Component } from 'react';

//components
import Routes from "./components/routes";
import Nav from "./components/nav";

//impor the store from the store file
import store from "./store/store";

//Provider from react-redux
import {Provider} from "react-redux";

//jquery for menu
import $ from "jquery";

class App extends Component {

componentDidMount(){

  $("body").on("click", ".menu", ()=>{

      $(".menu").next("UL").slideToggle();

  });


  $(window).on("load", ()=>{
    if(window.innerWidth < 596){
      $(".menu").next("UL").slideUp();
    }

  });

  $(window).on("resize", ()=>{
    if(window.innerWidth > 596){
      $(".menu").next("UL").slideDown();
    }

  });



}
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
