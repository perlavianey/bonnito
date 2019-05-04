import React from "react";
import { Route, Switch } from "react-router-dom";
import {Redirect} from "react-router-dom";
import Routes from "../../Routes.js";
import AdminNavbarDisplay from '../../components/Navbars/AdminNavbarDisplay'
import Footer from '../../components/Footer'

class AuthLayout extends React.Component {

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) return this.getRoutes(prop.views);
            if (prop.layout === "/auth") {
                return (<Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}/>);
            }
            else return null;
        });
    };

    getActiveRoute = routes => {
        let activeRoute = "Default Brand Text";
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse) {
                let collapseActiveRoute = this.getActiveRoute(routes[i].views);
                if (collapseActiveRoute !== activeRoute) return collapseActiveRoute;
            }
            else {
                if (window.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) return routes[i].name;
            }
        }
        return activeRoute;
    };

    componentDidMount() {
        document.documentElement.classList.remove("nav-open");
    }

    render() {
        return (
            <>
                <AdminNavbarDisplay brandText={ this.getActiveRoute(Routes) } />
                <Switch>
                    {this.getRoutes(Routes)}
                    <Route render={()=><Redirect to='/auth/categories'/>}/>
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default AuthLayout;