import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasketItem.css';


class BasketItem extends Component {
  constructor(props) {
    super(props);
    BasketItem.propTypes = {
      title: PropTypes.string,
      brand: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      availableQuantity: PropTypes.number.isRequired,
      showButton: PropTypes.bool,
      onDeleteItem: PropTypes.func.isRequired,
    };
    BasketItem.defaultProps = {
      title: 'default',
      showButton: false,
    };
    this.state = {
    };

    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onDeleteItem() {
    this.props.onDeleteItem(this.props.item);
  }

  render() {
    return (
      <div className="BasketItem" >
        <div className="basket-item-description">
          <div className="item-brand">
            {this.props.brand}
          </div>
          <div>
            {this.props.title}
          </div>
        </div >
        <div className="basket-item-other">
          {`Rs. ${this.props.cost}`}
        </div>
        <div className="item-other">
          {this.props.availableQuantity}
        </div>
        <div className="basket-item-other">
          {`Rs. ${this.props.availableQuantity * this.props.cost}`}
        </div>
        {this.props.showButton && <div onClick={this.onDeleteItem}><i className="material-icons">clear</i></div>}
      </div>
    );
  }
}

export default BasketItem;
