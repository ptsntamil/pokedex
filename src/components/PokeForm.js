import React from 'react';
import { store } from '../store';
import { actions } from '../actions';
import { Link } from "react-router-dom";
import Select from 'react-select';

class PokeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = store.getState();
      this.pokeObject = ["name", "Attack", "type", "Defense", "description"];
    }
  
    componentDidMount() {
      let {list} = store.getState();
      let { match } = this.props;
      let { pokeId } = match.params;
      if(pokeId){
        let poke = list[pokeId - 1]; 
        store.dispatch(actions.pokeForm({
          poke,
          error: {},
          formValid: true
        }));
      }
    }
    
    clear = () => {
      store.dispatch(actions.pokeForm({
        poke: {
          name: {
            english: ""
          },
          type: "",
          base: {
            Attack: "",
            Defense: ""
          },
          description: ""
        },
        formValid: false,
        error: {
          description: true
        },
      }));
      this.props.history.push("/");
    } 
  
    handleChange = event => {
      let { poke, error, formValid } = store.getState();
        const field = event.target.id;
        const fieldValue = event.target.value;
        //poke[field] = fieldValue;
        switch(field) {
          case "description": 
              poke.description = fieldValue;
              break;
          case "type": 
              poke.type = fieldValue;
              break;
          case "name": 
              poke.name= {english : fieldValue};
                break;
          case "attack": 
              poke.base.Attack = fieldValue;
              break;
          case "defense": 
              poke.base.Defense = fieldValue;
              break;
          default: 
              poke[field] = fieldValue;
        }
      store.dispatch(actions.pokeForm({
        poke,
        error,
        formValid
      }));   
    }
    
    handleSelectChange = (selectedOption) => {
      let { poke, error, formValid } = store.getState();
      poke.type = [];
      selectedOption.forEach((value) => {
        poke.type.push(value.value);
      });
      store.dispatch(actions.pokeForm({
        poke,
        error,
        formValid
      }));
    }

    updateDescriptionOrCreate = _ => {
      const {poke, list} = store.getState();
      if(poke.id) {
        list[poke.id-1] = poke;
      } else {
        poke.id = list.length + 1;
        list.push(poke);
      }
      store.dispatch(actions.addPoke(list));
      this.clear();
      this.props.history.push("/");
    }
  
    render() {
      const {poke, error} = store.getState();
      const multiSelect =[];
      if(poke.type && poke.type.length) {
        poke.type.forEach((value) => {
          multiSelect.push({
            value: value,
            label: value
          });
        });
      }
      
      const options = [{
          value: "Grass", 
          label: "Grass"
        }, { 
          value: "Poison", 
          label: "Poison"
        }, { 
          value: "Fire",
          label: "Fire"
        }, {
          value: "Flying",
          label: "Flying"
        }, { 
          value: "Water", 
          label: "Water"
        }, { 
          value: "Bug",
          label: "Bug"
        }, {
          value: "Normal",
          label: "Normal"
        } , {
          value: "Electric",
          label: "Electric"
        }, {
          value: "Ground",
          label: "Ground"
        }, {
          value: "Fairy",
          label: "Fairy"
        },{
          value: "Psychic",
          label: "Psychic"
        }, {
          value: "Rock",
          label: "Rock"
        }];
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-11 col-md-11 col-lg-11">
              <h3>Poke</h3>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1">
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <label>Name</label>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <input type="text" id="name" className="form-control" value={poke.name.english} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <label>Types</label>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                    <Select value={multiSelect} isMulti={true} onChange={this.handleSelectChange} options={options}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <label>Attacks</label>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <input type="number" id="attack" className="form-control" value={poke.base.Attack} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <label>Defense</label>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <input type="number" id="defense" className="form-control" value={poke.base.Defense} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <label>Description</label>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-2">
                       <textarea type="text" className="form-control" id="description" value={poke.description} onChange={this.handleChange}></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-2">
                      <button type="button" className="btn btn-primary" onClick={this.updateDescriptionOrCreate}> {poke.id ? "Update" : "Create"} </button>
                      <button type="button" className="btn btn-default" onClick={this.clear}>Back</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

export default PokeForm;