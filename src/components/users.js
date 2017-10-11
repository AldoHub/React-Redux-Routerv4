import React, { Component } from 'react';

//imports needed for the redux store mapping
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import action for this component
import {fetchUsers} from "../actions/fetchUsers";

//lazyload
import LazyLoad from 'react-lazyload';


class Users extends Component {
  
  //if the component mounted correctly 
  //do the action
  componentDidMount(){
      this.props.fetchUsersAction();
  }
  
  
  render() {
    return (
      <div className="main">
            {
                this.props.fetchUsers.map(user =>{
                    return(
                    
                    <LazyLoad height={200} key={user.email}>
                      <div className="user">  
                       
                        <img className="profile-pic" src={user.picture.large}  alt="{user.name.first}"/>
                        
                        <h1>{user.name.first}</h1> 
                        <h3>{user.name.last}</h3> 
                        <p>{user.email}</p>

                       
                      </div>  
                    </LazyLoad>      
                    )

                })
            }
      </div>
    );
  }
}


function mapStateToProps(state){
    return{
      fetchUsers: state.FETCH_USERS.fetchUsers
    }
  }
  
  function matchDispatchToProps(dispatch){
      //match the action imported to a new prop
      return bindActionCreators({fetchUsersAction:fetchUsers}, dispatch);
  }
  
export default connect(mapStateToProps, matchDispatchToProps)(Users);

