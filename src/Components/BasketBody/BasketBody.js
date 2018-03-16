import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BasketBody.css';

import BasketCategory from '../BasketCategory/BasketCatergory';
import UnderlineHeading from '../UnderlineHeading/UnderlineHeading';
import TableHeader from '../TableHeader/TableHeader';


class BasketBody extends Component {
  constructor(props) {
    super(props);
    BasketBody.propTypes = {
      onCheckOut: PropTypes.func.isRequired,
      onDeleteItem: PropTypes.func.isRequired,
      showButton: PropTypes.bool.isRequired,
      basketData: PropTypes.shape({}).isRequired,
      numberOfItems: PropTypes.number.isRequired,
      cost: PropTypes.number.isRequired,
    };
    BasketBody.defaultProps = {

    };
    this.state = {
    };

    this.populateCategories = this.populateCategories.bind(this);
    this.onCheckOut = this.onCheckOut.bind(this);
  }

  onCheckOut() {
    this.props.onCheckOut();
  }

  populateCategories() {
    return Object.keys(this.props.basketData).map(category =>
      (<BasketCategory
        category={category}
        items={this.props.basketData[category]}
        onDeleteItem={this.props.onDeleteItem}
        showButton={this.props.showButton}
      />));
  }

  render() {
    return (
      <div className="BasketBody" >
        <UnderlineHeading title={`Your Basket (${this.props.numberOfItems} items)`} className="basket-heading" />
        <TableHeader />
        <div>
          {this.populateCategories()}
        </div>
        <div>
          {this.props.cost}
          <input type="button" value="Checkout" onClick={this.onCheckOut} />
        </div>
      </div>
    );
  }
}

export default BasketBody;
