import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasketCategory.css';

import BasketItem from '../BasketItem/BasketItem';

class BasketCategory extends Component {
  constructor(props) {
    super(props);
    BasketCategory.propTypes = {

    };
    BasketCategory.defaultProps = {
    };
    this.state = {
    };

    this.populateItems = this.populateItems.bind(this);
  }

  populateItems() {
    return this.props.items.map(item => <BasketItem id={item.id} title={item.title} availableQuantity={item.availableQuantity} brand={item.brand} category={item.category} cost={item.cost} description={item.description} />);
  }

  render() {
    return (
      <div className="category-main" >
        <div className="category-header">
          {this.props.category}
        </div>
        <div className="BasketCategory" >
          {this.populateItems()}
        </div>
      </div>
    );
  }
}

export default BasketCategory;