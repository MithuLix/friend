import { useState } from "react";
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import './App.css';
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>

        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/header'>
          <Header></Header>
        </Route>

        <Route exact path="/friend/:friendId">
           <FriendDetails></FriendDetails>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
