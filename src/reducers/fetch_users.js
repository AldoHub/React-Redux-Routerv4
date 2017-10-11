
const fetchUsers=(state={
    fetchUsers:[],
    fetched: false,
   
    }, action)=>{
        if(action.type === "FETCH_USERS"){
            
            state= {...state, fetchUsers: action.payload}
        }
    
        return state;
    };
export default fetchUsers;