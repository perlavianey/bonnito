import React, { Component } from 'react';
import {Switch,Router,Route,Redirect} from "react-router-dom";
import AuthLayout from "./layouts/Auth";
import AppLayout from "./layouts/App";
import './App.css';
import {createBrowserHistory} from 'history';

const hist = createBrowserHistory();

const App = () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Route path="/app" render={props => <AppLayout  {...props} />} />
                <Redirect from="/" to="/app/inicio" />
            </Switch>
        </Router>
    );
}

export default App;