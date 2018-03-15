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
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.availableQuantity}
        </div>

      </div>
    );
  }
}

export default BasketItem;
