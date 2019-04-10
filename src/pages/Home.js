import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import ParticleComponent from "../components/particleContainer";

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <ParticleComponent/>
                <header className="App-header">
                <p className="title">SHELLA CANTOS</p>
                <Link to = '/development' className="subtitle1"> Developer</Link>
                <p className="subtitle2">|</p>
                <Link to = '/photography' className="subtitle3">Photographer</Link>
                </header>
            </div>
        );
      }
}