import React, { Component } from 'react';
import {withRouter,Link} from "react-router-dom";
import Routes from './Routes'
import './index.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navBar'>

        </nav>
        <div className='content'>
          <Routes/>
        </div>
          <footer className="footer">
              <a href="https://twitter.com/perlavianey?lang=es"><i className="fab fa-instagram"/>&nbsp;Síguenos en Instagram</a>
          </footer>
      </div>
    );
  }
}

export default withRouter(App);
