import React, { Component } from 'react';
import { store } from '../store';
import { actions } from '../actions';
import apiService from '../apiService';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
      }

    handleInputChange = (event) => {
        let { query } = store.getState();
        query = event.target.value;
        store.dispatch(actions.updateSearchQuery(query));
        apiService.searchInGrid();
    }

 render() {
     let { query } = store.getState();
    return (
     <form>
       <input placeholder="Search for..." id="serch" className="form-control" value={query} onChange={this.handleInputChange} />
     </form>
   )
 }
}

export default Search;