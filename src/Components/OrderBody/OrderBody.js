import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import './OrderBody.css';


import BasketCategory from '../BasketCategory/BasketCatergory';
import UnderlineHeading from '../UnderlineHeading/UnderlineHeading';
import TableHeader from '../TableHeader/TableHeader';

const Helpers = require('../../helpers');

class OrderBody extends Component {
  constructor(props) {
    super(props);
    OrderBody.propTypes = {
    };
    OrderBody.defaultProps = {
    };
    this.state = {
      orders: [],
    };

    this.populateCategories = this.populateCategories.bind(this);
  }

  componentDidMount() {
    Axios.get('/orders').then((orderData) => {
      const orders = orderData.data.orders;
      let cumulator = [];
      orders.forEach((order) => {
        cumulator = cumulator.concat(order.items);
      });
      const orderArray = Helpers.groupDataBasedOnKey(cumulator, 'category');
      this.setState({
        orders: orderArray,
      });
    });
  }


  populateCategories() {
    if (this.state.orders.length !== 0) {
      return Object.keys(this.state.orders).map(category => <BasketCategory category={category} items={this.state.orders[category]} />);
    }
  }


  render() {
    return (
      <div className="OrderBody" >
        <UnderlineHeading title="All Orders" className="order-main-header" />
        <div className="order-subtitle">
          Past Orders(10)
        </div>
        <TableHeader />

        {this.populateCategories()}

      </div>
    );
  }
}

export default OrderBody;
