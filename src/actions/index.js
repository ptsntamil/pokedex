import Constants from './../Constants';
export const actions = {
    addPoke : function(list) {
        return {
            type: "ADD_POKE",
            list
        };
    },
    pokeForm : function(form) {
        return {
            type: "POKE_FORM",
            poke: form.poke,
            formValid: form.formValid,
            error: form.error
        };
    },
    setLoginForm : function(login) {
        return {
            type: "LOGIN_FORM",
            login: login
        };
    },
    setAuth: function(auth) {
        return {
            type: Constants.SET_AUTH,
            isAuthenticated: auth.isAuthenticated,
            login: auth.login
        };
    },
    fetchUpdate: function(fetchFlag) {
        return {
            type: Constants.FETCH_UPDATE,
            fetchData: fetchFlag
        };
    },
    updateSearchQuery: function(query) {
        return {
            type: Constants.UPDATE_SEARCH_QUERY,
            query: query
        };
    },
    updateGridData: function(gridData) {
        return {
            type: Constants.GRID_DATA,
            gridData
        };
    }
}