import Constants from './../Constants';
export default(state, action) => {
  switch(action.type) {
    case "ADD_POKE":
      return {
        ...state,
        list : action.list,
        gridData : action.list
      };
    case "POKE_FORM": 
      return {
        ...state,
        poke: action.poke,
        error: action.error,
        formValid: action.formValid
      };
    case "LOGIN_FORM":
      return {
        ...state,
        login: action.login
      };
    case Constants.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        login: action.login
      };
    case Constants.FETCH_UPDATE:
      return {
        ...state,
        fetchData: action.fetchData
      };
    case Constants.UPDATE_SEARCH_QUERY: 
      return {
        ...state,
        query: action.query
      };
    case Constants.GRID_DATA:
      return {
        ...state,
        gridData: action.gridData
      };
    default:
      return state;
  }
}