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
      reference: {},
      basket: {},
      numberOfItems: 0,
      page: 'shop',
      cost: 0,
    };

    this.onCartModify = this.onCartModify.bind(this);
    this.basketModifier = this.basketModifier.bind(this);
    this.onBasketClick = this.onBasketClick.bind(this);
    this.onOrderClick = this.onOrderClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
    this.onCheckOut = this.onCheckOut.bind(this);
  }


  componentDidMount() {
    Axios.get('/inventory').then((inventoryData) => {
      const categorizedData = Helpers.groupDataBasedOnKey(inventoryData.data, 'category');
      this.setState({
        categorizedData,
        reference: categorizedData,
      });
    });
  }

  onCheckOut() {
    // const items = Helpers.objectToArray(this.props.basketData);
    Axios.post('/order', { basketData: this.state.basket, inventoryData: this.state.categorizedData }).then(() => {
      this.setState({
        basket: {},
        page: 'order',
        numberOfItems: 0,
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

  onDeleteItem(item) {
    const inventoryCopy = Object.assign({}, this.state.categorizedData);
    const basketCopy = Object.assign({}, this.state.basket);
    const categoryArrayCopy = basketCopy[item.category].slice();
    basketCopy[item.category] = categoryArrayCopy.filter(iterItem => iterItem.id !== item.id);
    inventoryCopy[item.category].forEach((iterItem) => {
      if (iterItem.id === item.id) {
        iterItem.availableQuantity += item.availableQuantity;
      }
    });
    if (basketCopy[item.category].length === 0) {
      delete basketCopy[item.category];
    }
    if (inventoryCopy[item.category].length === 0) {
      delete inventoryCopy[item.category];
    }
    this.setState({
      categorizedData: inventoryCopy,
      basket: basketCopy,
      numberOfItems: this.state.numberOfItems - item.availableQuantity,
    }, () => {
      this.calculateCost();
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
    if (inventoryCopy[mitem.category].length === 0) {
      delete inventoryCopy[mitem.category];
    }
    this.basketModifier(category, mitem, action);
    this.setState({
      categorizedData: inventoryCopy,
    });
  }

  calculateCost() {
    const items = Helpers.objectToArray(this.state.basket);
    let cost = 0;
    items.forEach((item) => {
      cost += item.cost * item.availableQuantity;
    });
    this.setState({
      cost,
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
    if (basketCopy[item.category].availableQuantity === 0) {
      delete basketCopy[item.category];
    }
    this.setState({
      basket: basketCopy,
      numberOfItems,
    }, () => {
      this.calculateCost();
    });
  }

  render() {
    return (
      <div className="App" >
        <Header title="E-Shopper" onBasketClick={this.onBasketClick} numberOfItems={this.state.numberOfItems} onOrderClick={this.onOrderClick} onShopClick={this.onShopClick} />
        {this.state.page === 'shop' && <ShoppingBody categorizedData={this.state.categorizedData} onCartModify={this.onCartModify} />}
        {this.state.page === 'basket' && <BasketBody basketData={this.state.basket} inventoryData={this.state.categorizedData} numberOfItems={this.state.numberOfItems} onDeleteItem={this.onDeleteItem} cost={this.state.cost} showButton onCheckOut={this.onCheckOut} />}
        {this.state.page === 'order' && <OrderBody />}
      </div>
    );
  }
}

export default App;
