import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import PokeList from './PokeList';
import PokeForm from './PokeForm';
import Login from './Login';
import { store } from '../store';
import Logout from './Logout';

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         store.getState().isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

class PokeApp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  // componentDidMount() {
  //   if(localStorage.getItem(Constants.AUTH_TOKEN)) {
  //     store.dispatch(actions.setAuth({
  //       isAuthenticated: true,
  //       login : {}
  //     }));
  //     history.push("/users");
  //   } else {
  //     store.dispatch(actions.setAuth({
  //       isAuthenticated: false,
  //       login : {
  //         username: "",
  //         password: ""
  //       }
  //     }));
  //     history.push("/");
  //   }
  // }

  render() {
      return(
        <div className="container">
          {/* <header>
            {store.getState().isAuthenticated && <div className="text-right">
              <Logout/>
            </div>}
          </header> */}
          <Switch>
            {/*<PrivateRoute path='/user' component={PokeForm}/>
            <PrivateRoute exact path='/users' component={{PokeList}}/>*/}
             <Route exact path='/poke' component={PokeForm}/> 
            <Route exact path='/poke/:pokeId' component={PokeForm}/>
            <Route exact path='/' component={PokeList}/>
          </Switch>
        </div>
      );
    }
}
export default PokeApp;

