import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import asyncComponent from './components/asyncComponent';

const Home = asyncComponent(() => import('./pages/Home'));
const Development = asyncComponent(() => import('./pages/Development'));
const Photography = asyncComponent(() => import('./pages/Photography'));

ReactDOM.render(
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/development" component={Development} />
        <Route path="/photography" component={Photography} />
    </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
