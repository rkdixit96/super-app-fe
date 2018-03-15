import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddRemoveBar.css';

class AddRemoveBar extends Component {
  constructor(props) {
    super(props);
    AddRemoveBar.propTypes = {
      title: PropTypes.string,
    };
    AddRemoveBar.defaultProps = {
      title: 'default',
    };
    this.state = {
    };

    this.addRemove = this.addRemove.bind(this);
  }

  addRemove(event) {
    this.props.onCartModify(this.props.category, this.props.id, event.target.value);
  }

  render() {
    return (
      <div className="AddRemoveBar" >
        <input type="button" value="-" onClick={this.addRemove} />
        <input type="button" value="+" onClick={this.addRemove} />
      </div>
    );
  }
}

export default AddRemoveBar;
