import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasketItem.css';


class BasketItem extends Component {
  constructor(props) {
    super(props);
    BasketItem.propTypes = {
      title: PropTypes.string,
    };
    BasketItem.defaultProps = {
      title: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="BasketItem" >
        <div className="item-description">
          <div className="item-brand">
            {this.props.brand}
          </div>
          <div>
            {this.props.title}
          </div>
        </div >
        <div className="item-other">
          {`Rs. ${this.props.cost}`}
        </div>
        <div className="item-other">
          {this.props.availableQuantity}
        </div>
        <div className="item-other">
          {`Rs. ${this.props.availableQuantity * this.props.cost}`}
        </div>

      </div>
    );
  }
}

export default BasketItem;
