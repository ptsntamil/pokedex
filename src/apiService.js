import { store } from './store';
import { actions } from './actions';
var pokedex = require('./data/pokedex')
let fetchPokes = _ => {
    store.dispatch(actions.fetchUpdate(false));
    store.dispatch(actions.addPoke(pokedex));
};

let searchInGrid = _ => {
    let { list, query } = store.getState();
    let gridData = list.filter( (poke) => {
        return poke.name && poke.name.english.indexOf(query) > -1;
    });
    store.dispatch(actions.updateGridData(gridData));
}

const apiService = {
    fetchPokes : fetchPokes,
    searchInGrid : searchInGrid
}
export default apiService;