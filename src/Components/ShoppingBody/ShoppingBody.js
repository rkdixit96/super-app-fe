import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingBody.css';

import CategoryContainer from '../CategoryContainer/CategoryContainer';

class ShoppingBody extends Component {
  constructor(props) {
    super(props);
    ShoppingBody.propTypes = {
      title: PropTypes.string,
    };
    ShoppingBody.defaultProps = {
      title: 'default',
    };
    this.state = {
    };

    this.populateCategories = this.populateCategories.bind(this);
  }


  populateCategories() {
    return Object.keys(this.props.categorizedData).map(category => <CategoryContainer category={category} items={this.props.categorizedData[category]} onCartModify={this.props.onCartModify} />);
  }


  render() {
    return (
      <div className="ShoppingBody" >
        {this.populateCategories()}
      </div>
    );
  }
}

export default ShoppingBody;
