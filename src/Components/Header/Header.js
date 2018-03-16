import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      title: PropTypes.string,
      onBasketClick: PropTypes.func.isRequired,
      onOrderClick: PropTypes.func.isRequired,
      onShopClick: PropTypes.func.isRequired,
      numberOfItems: PropTypes.arrayOf.isRequired,
    };

    Header.defaultProps = {
      title: 'default',
    };

    this.state = {
    };

    this.onBasketClick = this.onBasketClick.bind(this);
    this.onOrderClick = this.onOrderClick.bind(this);
    this.onShopClick = this.onShopClick.bind(this);
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
      <div className="Header" >
        <div className="header-title" onClick={this.onShopClick}>
          <div>
            <i className="material-icons">shopping_cart</i>
          </div>
          <div>
            {this.props.title}
          </div>
        </div>
        <div className="header-buttons">
          <div onClick={this.onOrderClick} className="header-order">
            All Orders
          </div>
          <div onClick={this.onBasketClick} className="header-basket">
            <div>
              <i className="material-icons">shopping_basket</i>
            </div>
            <div className="header-basket-text">
              <div>
              My basket
              </div>
              <div>
                {`${this.props.numberOfItems} items`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
