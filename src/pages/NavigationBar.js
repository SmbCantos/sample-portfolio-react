import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavigationBar.css';
import brush from '../fonts/yellow.png'

export default class NavigationBar extends Component {
  render() {
    return (
        <div className='Nav'>
            { this.props.photography ? 
                <img src={brush} alt='active' className='activeNav' style={{width: '10%', left: '81vw'}}></img> :
                <img src={brush} alt='active' className='activeNav' style={{width: '10%', left: '63vw'}}></img> 
            }
            <Link to = '/' className="home"> SHELLA CANTOS </Link>
            <Link to = '/development' className="development" onClick={() => this.setState({photography: false})}> Development </Link>
            <Link to = '/' className="pipe"> | </Link>
            <Link to = '/photography' className="photography" onClick={() => this.setState({photography: true})}> Photography </Link>
        </div>
    );
  }
}
