import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { 
  list: [],
  poke: {
    name: {
      english: ""
    },
    description: "",
    base: {
      Attack:"",
      Defense: ""
    },
    type: []
  },
  gridData: [],
  fetchData: true,
  error: {
    name: true,
    email: true,
    dob: true
  },
  search: "",
  query: "",
  formValid: false,
  login : {
    username: '',
    password: ''
  }
};
export const store = createStore(reducer, initialState);
