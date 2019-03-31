import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import { store } from './store';
import PokeApp from './components/PokeApp';

const render = function() {
  ReactDOM.render(
    <BrowserRouter>
      <PokeApp />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)
//ReactDOM.render(<Clock />, document.getElementById('root'));
//registerServiceWorker();
