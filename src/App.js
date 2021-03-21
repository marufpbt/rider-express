import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import Background from './images/Bg.png';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  var sectionStyle = {
    backgroundImage: `url(${Background})`
  };
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div style={sectionStyle} className="bg">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destination/:id">
              <Destination></Destination>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </div>
    </userContext.Provider>
  );
}

export default App;
