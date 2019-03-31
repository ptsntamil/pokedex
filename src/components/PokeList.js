import React from 'react';
import { store } from '../store';
import { actions } from '../actions';
import { Link } from "react-router-dom";
import ApiService from "../apiService";
import Search from './Search';
import Suggestions from './Suggestions';

class PokeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = store.getState();
    }
    
    componentWillMount() {
      if(store.getState().fetchData) {
        ApiService.fetchPokes();
      }
    }
    componentWillUnmount() {
      store.dispatch(actions.updateSearchQuery(""))
    }

    selectSuggestion  = (query) => {
      store.dispatch(actions.updateSearchQuery(query.english));
      ApiService.searchInGrid();
    }

    renderTable = list => (
      <tbody>
        {!list.length &&
          <tr><td colSpan="6" className="text-center">No Data Found</td></tr>
        }
        {list.map((data) => (
          <tr key={data.id}>
            {/* <td>{data.id}</td> */}
            <td><Link to={`poke/${data.id}`}>{data.name.english}</Link></td>
            <td>{data.type.toString()}</td>
            <td>{data.base.Attack}</td>
            <td>{data.base.Defense}</td>
            {/* <td>
              {/* <Link to={`user/${data.id}`}><i className="fa fa-pencil"></i></Link>
            </td> */}
          </tr>
        ))}
      </tbody>
    )
  
    render() {
      let {gridData , query} = store.getState();
      let resultSug = query && gridData.length > 1 ? gridData.slice(0,5) : []; 
      return(
        <div className="container">
          <div className="row">
            <div className="col-sm-11 col-md-11 col-lg-11">
              <h2>List of Pokes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-5 col-lg-5">
              <div className="grid-search">
                <Search />
                { query && <Suggestions results={resultSug} select={this.selectSuggestion}/> }
              </div>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
              <Link className="btn btn-primary" to="/poke">Create</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Attack</th>
                  <th>Defence</th>
                </tr>
                </thead>
                {this.renderTable(gridData)}
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

  export default PokeList;