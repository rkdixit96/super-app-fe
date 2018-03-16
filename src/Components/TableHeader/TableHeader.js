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
      <div className={`basket-header-table ${this.props.className}`} >
        <div className="item-description-table">
          ITEM DESCRIPTION
        </div>
        <div className="item-other-table">
          UNIT PRICE
        </div>
        <div className="item-other-table">
          QUANTITY
        </div>
        <div className="item-other-table">
          SUBTOTAL
        </div>
      </div>

    );
  }
}

export default TableHeader;
