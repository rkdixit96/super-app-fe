import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import ShoppingBody from '../ShoppingBody/ShoppingBody';
import BasketBody from '../BasketBody/BasketBody';
import OrderBody from '../OrderBody/OrderBody';

const Helpers = require('../../helpers');

class App extends Component {
  constructor() {
    super();
    this.state = {
      categorizedData: {},
      basket: {},
      numberOfItems: 0,
      page: 'shop',
    };

    this.groupDataBasedOnKey = this.groupDataBasedOnKey.bind(this);
    this.onCartModify = this.onCartModify.bind(this);
    this.basketModifier = this.basketModifier.bind(this);
    this.onBasketClick = this.onBasketClick.bind(this);
    this.onOrderClick = this.onOrderClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
  }


  componentDidMount() {
    Axios.get('/inventory').then((inventoryData) => {
      const categorizedData = this.groupDataBasedOnKey(inventoryData.data, 'category');
      this.setState({
        categorizedData,
      });
    });
  }

  onShopClick() {
    this.setState({
      page: 'shop',
    });
  }

  onBasketClick() {
    this.setState({
      page: 'basket',
    });
  }

  onOrderClick() {
    this.setState({
      page: 'order',
    });
  }

  onCartModify(category, id, action) {
    const inventoryCopy = Object.assign({}, this.state.categorizedData);
    const itemArray = inventoryCopy[category];
    let mitem = {};
    itemArray.forEach((item) => {
      if (item.id === id) {
        mitem = item;
        if (action === '+') {
          item.availableQuantity -= 1;
        }
        if (action === '-') {
          item.availableQuantity += 1;
        }
      }
    });
    this.basketModifier(category, mitem, action);
    this.setState({
      categorizedData: inventoryCopy,
    });
  }

  basketModifier(category, item, action) {
    let numberOfItems = this.state.numberOfItems;
    const basketCopy = Object.assign({}, this.state.basket);
    // If category does not exits add it
    if (!basketCopy.hasOwnProperty(category)) {
      basketCopy[category] = [];
    }
    // Get item id of object to be modified
    let idDoesNotExist = true;
    for (let itemInd = 0; itemInd < basketCopy[category].length; itemInd += 1) {
      // if item id exists
      const iterItem = basketCopy[category][itemInd];
      if (item.id === iterItem.id) {
        idDoesNotExist = false;
        if (action === '+') {
          iterItem.availableQuantity += 1;
          numberOfItems += 1;
        }
        if (action === '-') {
          iterItem.availableQuantity -= 1;
          numberOfItems -= 1;
        }
        break;
      }
    }
    // if item id does not exist
    if (idDoesNotExist) {
      if (action === '+') {
        const itemCopy = Object.assign({}, item);
        itemCopy.availableQuantity = 1;
        numberOfItems += 1;
        basketCopy[category].push(itemCopy);
      }
    }
    this.setState({
      basket: basketCopy,
      numberOfItems,
    });
  }


  groupDataBasedOnKey(data, key) {
    const groupedData = {};
    data.forEach((element) => {
      if (groupedData[element[key]] === undefined) {
        groupedData[element[key]] = [];
      }
      groupedData[element[key]].push(element);
    }, this);
    return groupedData;
  }


  render() {
    return (
      <div className="App" >
        <Header title="E-Shopper" onBasketClick={this.onBasketClick} numberOfItems={this.state.numberOfItems} onOrderClick={this.onOrderClick} onShopClick={this.onShopClick} />
        {this.state.page === 'shop' && <ShoppingBody categorizedData={this.state.categorizedData} onCartModify={this.onCartModify} />}
        {this.state.page === 'basket' && <BasketBody basketData={this.state.basket} inventoryData={this.state.categorizedData} numberOfItems={this.state.numberOfItems} />}
        {this.state.page === 'order' && <OrderBody />}
      </div>
    );
  }
}

export default App;
