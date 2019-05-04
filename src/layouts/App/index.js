import React from "react";
import {Redirect} from "react-router-dom";

import Routes from "../../Routes.js";
import NavbarDisplay from '../../components/Navbars/NavbarDisplay'
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";

class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views);
            }
            if (prop.layout === "/app") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key} />
                );
            } else {
                return null;
            }
        });
    };


    render() {
        return (
            <>
                <NavbarDisplay/>
                <Switch>
                    {this.getRoutes(Routes)}
                    <Route render={()=><Redirect to='/app/inicio'/>}/>
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default AppLayout;
