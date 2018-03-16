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
      count: 0,
    };

    this.addRemove = this.addRemove.bind(this);
  }

  addRemove(event) {
    if (event.target.value === '-') {
      if (this.state.count === 0) {
        return;
      }
      this.setState({
        count: this.state.count - 1,
      });
    }
    if (event.target.value === '+') {
      this.setState({
        count: this.state.count + 1,
      });
    }

    this.props.onCartModify(this.props.category, this.props.id, event.target.value);
  }

  render() {
    return (
      <div className="AddRemoveBar" >
        <input type="button" value="-" onClick={this.addRemove} />
        <div className="button-center-text">
          {`${this.state.count} in basket`}

        </div>
        <input type="button" value="+" onClick={this.addRemove} />
      </div>
    );
  }
}

export default AddRemoveBar;
