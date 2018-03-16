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
    };
    this.populateCategories = this.populateCategories.bind(this);
  }

  componentDidMount() {
    const orderArray = Helpers.groupDataBasedOnKey(this.props.items, 'category');
    this.setState({
      orderArray,
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
        {this.props.id}
        {this.props.date}
        <TableHeader />
        {this.populateCategories()}
      </div>
    );
  }
}

export default OrderContainer;
