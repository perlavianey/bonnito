import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

const WithRouter = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(<WithRouter/>, document.getElementById('root'));

serviceWorker.unregister();