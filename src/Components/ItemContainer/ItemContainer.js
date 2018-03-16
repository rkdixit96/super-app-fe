import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemContainer.css';

import AddRemoveBar from '../AddRemoveBar/AddRemoveBar';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    ItemContainer.propTypes = {
      title: PropTypes.string,
      className: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      onCartModify: PropTypes.func.isRequired,
    };
    ItemContainer.defaultProps = {
      title: 'default',
      className: '',
    };
    this.state = {
    };
  }

  render() {
    return (
      <div className={`ItemContainer ${this.props.className}`} >
        <img src={this.props.imageUrl} width="100" height="80" alt="twitter" className="item-image" />
        <div className="shop-item-brand">
          {this.props.brand}
        </div>
        <div>
          {this.props.title}
        </div>
        <div className="shop-item-description">
          {this.props.description}
        </div>
        <div className="shop-item-box">
          {`MRP ${this.props.cost}`}
          <AddRemoveBar category={this.props.category} id={this.props.id} item={this.props.item} onCartModify={this.props.onCartModify} />
        </div>
      </div>
    );
  }
}

export default ItemContainer;
