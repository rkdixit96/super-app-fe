import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CategoryContainer.css';

import ItemContainer from '../ItemContainer/ItemContainer';

class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    CategoryContainer.propTypes = {
      title: PropTypes.string,
    };
    CategoryContainer.defaultProps = {
      title: 'default',
    };
    this.state = {
    };

    this.populateItems = this.populateItems.bind(this);
  }

  populateItems() {
    return this.props.items.map(item => <ItemContainer id={item.id} item={item} title={item.title} availableQuantity={item.availableQuantity} brand={item.brand} category={item.category} cost={item.cost} description={item.description} imageUrl={item.imageUrl} onCartModify={this.props.onCartModify} className={item.availableQuantity === 0 ? 'disabled' : 'not'} />);
  }

  render() {
    return (
      <div className="category-main" >
        <div className="category-header">
          {this.props.category}
        </div>
        <div className="CategoryContainer" >
          {this.populateItems()}
        </div>
      </div>
    );
  }
}

export default CategoryContainer;
