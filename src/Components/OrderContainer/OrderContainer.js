import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OrderContainer.css';

import BasketCategory from '../BasketCategory/BasketCatergory';
import TableHeader from '../TableHeader/TableHeader';

const Helpers = require('../../helpers');


class OrderContainer extends Component {
  constructor(props) {
    super(props);
    OrderContainer.propTypes = {

    };
    OrderContainer.defaultProps = {
    };
    this.state = {
      orderArray: [],
      cost: 0,
    };
    this.populateCategories = this.populateCategories.bind(this);
  }

  componentDidMount() {
    const orderArray = Helpers.groupDataBasedOnKey(this.props.items, 'category');
    let cost = 0;
    this.props.items.forEach((item) => {
      cost += item.cost * item.availableQuantity;
    });
    this.setState({
      orderArray,
      cost,
    });
  }


  populateCategories() {
    if (this.state.orderArray.length !== 0) {
      return Object.keys(this.state.orderArray).map(category => <BasketCategory category={category} items={this.state.orderArray[category]} />);
    }
    return <div />;
  }

  render() {
    return (
      <div className="OrderContainer" >
        <div className="order-table-header">
          <div className="order-item-description">
          ORDER
          </div>
          <div className="order-item-other">
          ITEMS
          </div>
          <div className="order-item-other">
          DATE
          </div>
          <div className="order-item-other">
          AMOUNT
          </div>
        </div>
        <div className="order-table-data">
          <div className="order-item-description">
            {this.props.id}
          </div>
          <div className="order-item-other">
            {this.props.items.length}
          </div>
          <div className="order-item-other">
            {this.props.date}
          </div>
          <div className="order-item-other">
            {this.state.cost}
          </div>
        </div>


        <TableHeader className="blue-back" />
        {this.populateCategories()}
      </div>
    );
  }
}

export default OrderContainer;
