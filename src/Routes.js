import React from 'react'
import {Route,Switch} from 'react-router-dom'
import InicioContainer from './components/Inicio/InicioContainer'


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/inicio" component={InicioContainer}/>
        </Switch>
    )
};

export default Routes