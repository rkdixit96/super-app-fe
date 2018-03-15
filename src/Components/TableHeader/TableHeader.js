import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableHeader.css';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    TableHeader.propTypes = {
    };
    TableHeader.defaultProps = {
    };
    this.state = {
    };
  }

  onBasketClick() {
    this.props.onBasketClick();
  }

  onOrderClick() {
    this.props.onOrderClick();
  }

  onShopClick() {
    this.props.onShopClick();
  }

  render() {
    return (
      <div className="basket-header">
        <div className="item-description">
          ITEM DESCRIPTION
        </div>
        <div className="item-other">
          UNIT PRICE
        </div>
        <div className="item-other">
          QUANTITY
        </div>
        <div className="item-other">
          SUBTOTAL
        </div>
      </div>

    );
  }
}

export default TableHeader;
