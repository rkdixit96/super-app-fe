import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import './BasketBody.css';

import BasketCategory from '../BasketCategory/BasketCatergory';
import UnderlineHeading from '../UnderlineHeading/UnderlineHeading';
import TableHeader from '../TableHeader/TableHeader';

const Helpers = require('../../helpers');


class BasketBody extends Component {
  constructor(props) {
    super(props);
    BasketBody.propTypes = {

    };
    BasketBody.defaultProps = {

    };
    this.state = {
      cost: 0,
    };

    this.populateCategories = this.populateCategories.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
    this.onCheckOut = this.onCheckOut.bind(this);
  }

  componentDidMount() {
    this.calculateCost();
  }


  onCheckOut() {
    // const items = Helpers.objectToArray(this.props.basketData);
    Axios.post('/order', { basketData: this.props.basketData, inventoryData: this.props.inventoryData });
  }

  populateCategories() {
    return Object.keys(this.props.basketData).map(category => <BasketCategory category={category} items={this.props.basketData[category]} />);
  }

  calculateCost() {
    const items = Helpers.objectToArray(this.props.basketData);
    let cost = 0;
    items.forEach((item) => {
      cost += item.cost * item.availableQuantity;
    });
    this.setState({
      cost,
    });
  }


  render() {
    return (
      <div className="BasketBody" >
        <UnderlineHeading title={`Your Basket (${this.props.numberOfItems} items)`} className="basket-heading" />
        <TableHeader />
        <div>
          {this.populateCategories()}
        </div>
        <div>
          {this.state.cost}
          <input type="button" value="Checkout" onClick={this.onCheckOut} />
        </div>
      </div>
    );
  }
}

export default BasketBody;
