import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import InicioContainer from './components/Inicio/InicioContainer'
import CategoryContainer from './components/Category/CategoryContainer'


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/inicio" component={InicioContainer}/>
            <Route exact path="/category/:id" component={CategoryContainer}/>
            <Redirect from="/" to="/inicio" />
        </Switch>
    )
};

export default Routes