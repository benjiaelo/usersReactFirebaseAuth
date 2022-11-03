 let initialState ={
  authUsers:null
 }


  const authReducer =(state= initialState, action) => {
    switch(action.type){
      case "ADD_NEW_USER":
        return {...state ,authUsers:action.payload }
        default: return state
    } 
  }

  export default authReducer