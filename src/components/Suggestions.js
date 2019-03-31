import React from 'react';
import "../suggestions.css";

const Suggestions = (props) => {
    const options = props.results.map(poke => (
      <li key={poke.id} onClick= {_ => { props.select(poke.name)}}>
        {poke.name && poke.name.english}
      </li>
    ));
    return <ul>{options}</ul>
  }
  
  export default Suggestions;