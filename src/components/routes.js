import React, { Component } from 'react';

//components
import Index from "./Index";
import Users from "./users";


//Router from react-router-dom
import {Route} from "react-router-dom";


class Routes extends Component {


  render() {
    return (

        <div>
          <Route exact path="/" component={Index} />      
          <Route exact path="/users" component={Users} />
        </div>

    );
  }
}

export default Routes;
