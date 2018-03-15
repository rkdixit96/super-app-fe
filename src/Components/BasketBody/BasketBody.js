import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasketBody.css';

import BasketCategory from '../BasketCategory/BasketCatergory';

class BasketBody extends Component {
  constructor(props) {
    super(props);
    BasketBody.propTypes = {

    };
    BasketBody.defaultProps = {

    };
    this.state = {
    };

    this.populateCategories = this.populateCategories.bind(this);
  }


  populateCategories() {
    return Object.keys(this.props.basketData).map(category => <BasketCategory category={category} items={this.props.basketData[category]} />);
  }


  render() {
    return (
      <div className="BasketBody" >
        {this.populateCategories()}
      </div>
    );
  }
}

export default BasketBody;
