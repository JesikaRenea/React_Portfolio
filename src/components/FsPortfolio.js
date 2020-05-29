import React, { Component } from 'react';
import Card from './Card';
import portfolio from "../portfolio.json"

class FsPortfolio extends Component {

    state = {
        portfolio
    };
    render() {

    return (
        <div className="wrapper">
            
            <h3>Portfolio</h3>
            <hr/>

            <Card />
            <Card />

            </div>
    );
    }
};

export default FsPortfolio