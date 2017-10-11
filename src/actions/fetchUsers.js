import axios from "axios";

export function fetchUsers(){
    //return the actual action to do
    return function(dispatch){
    
        axios.get("https://randomuser.me/api/?results=14").then(function (response) {
            console.log(response.data.results);
            dispatch({type: "FECTH_USERS_PENDING", fetched: false});
            dispatch({type:"FETCH_USERS", payload:response.data.results, fetched:true });
            dispatch({type:"FETCH_USERS_COMPLETE", fetched:true});
      
        
        
        
        });
        
 
  
   }
}