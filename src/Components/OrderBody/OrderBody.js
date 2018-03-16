import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import './OrderBody.css';

import UnderlineHeading from '../UnderlineHeading/UnderlineHeading';
import OrderContainer from '../OrderContainer/OrderContainer';


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
    this.populateOrders = this.populateOrders.bind(this);
  }

  componentDidMount() {
    Axios.get('/orders').then((orderData) => {
      const orders = orderData.data.orders;
      // let cumulator = [];
      // orders.forEach((order) => {
      //   cumulator = cumulator.concat(order.items);
      // });
      // const orderArray = Helpers.groupDataBasedOnKey(cumulator, 'category');
      this.setState({
        orders,
      });
    });
  }


  populateOrders() {
    return this.state.orders.map(order => <OrderContainer id={order.id} date={order.createdAt} items={order.items} />);
  }


  render() {
    return (
      <div className="OrderBody" >
        <UnderlineHeading title="All Orders" className="order-main-header" />
        <div className="order-subtitle">
          Past Orders(10)
        </div>

        {this.populateOrders()}
      </div>
    );
  }
}

export default OrderBody;
