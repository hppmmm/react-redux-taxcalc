// a Reducer for registering the STORE
function appReducer(state, action){
  switch (action.type){
    case "ADDTAX":
      return (
        Object.assign({}, state, {price: action.price * 1.10})
      );
    default:
      return state;
  }
}

export default appReducer;
