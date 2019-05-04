import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import InicioContainer from './views/User/Inicio/InicioContainer'
import CategoryContainer from './views/User/Category/CategoryContainer'
import Administrator from './views/Administrator'
import AdminCategoryContainer from './views/Administrator/Category/AdminCategoryContainer'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/inicio" component={InicioContainer}/>
            <Route exact path="/category/:id" component={CategoryContainer}/>

            <Route exact path="/admin" component={Administrator}/>
            <Route exact path="/admin/categories" component={AdminCategoryContainer}/>
            <Redirect from="/" to="/inicio" />
        </Switch>
    )
};

export default Routes