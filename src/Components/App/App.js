import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],

    };
  }

  componentDidMount() {
    Axios.get('/inventory').then((inventoryData) => {
      this.setState({
        inventory: inventoryData.data,
      });
    });
  }

  render() {
    return (
      <div className="App" >
        <Header title="E-Shopper" />
      </div>
    );
  }
}

export default App;
