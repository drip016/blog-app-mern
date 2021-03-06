import React, { Component, useContext } from 'react'
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
          {user ? <Home/> : <Login/>}
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/write">
          {user ? <Write/> : <Login/>}
          </Route>
          <Route path="/settings">
          {user ? <Settings/> : <Login/>}
          </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
