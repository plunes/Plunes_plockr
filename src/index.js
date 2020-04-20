import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/proxima.otf'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    console.log('hydrate')
  hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
    console.log('render')
  render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
