import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemContainer.css';

import AddRemoveBar from '../AddRemoveBar/AddRemoveBar';

class ItemContainer extends Component {
  constructor(props) {
    super(props);
    ItemContainer.propTypes = {
      title: PropTypes.string,
    };
    ItemContainer.defaultProps = {
      title: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="ItemContainer" >
        <div>
          {this.props.title}
        </div>
        <div>
          <AddRemoveBar category={this.props.category} id={this.props.id} onCartModify={this.props.onCartModify} />
        </div>

      </div>
    );
  }
}

export default ItemContainer;
