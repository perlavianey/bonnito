import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Routes from './Routes'
import './index.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navBar'/>
        <section className='content'><Routes/></section>
        <footer className="footer"><a href="https://twitter.com/perlavianey?lang=es"><i className="fab fa-instagram"/>&nbsp;Síguenos en Instagram</a></footer>
      </>
    );
  }
}

export default withRouter(App);
