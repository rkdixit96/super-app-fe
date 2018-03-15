import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UnderlineHeading.css';

class UnderlineHeading extends Component {
  constructor(props) {
    super(props);
    UnderlineHeading.propTypes = {
      title: PropTypes.string,
    };
    UnderlineHeading.defaultProps = {
      title: 'default',
    };
    this.state = {
    };
  }

  onBasketClick() {
    this.props.onBasketClick();
  }

  onOrderClick() {
    this.props.onOrderClick();
  }

  render() {
    return (
      <div className={`UnderlineHeading ${this.props.className}`} >
        {this.props.title}
      </div>
    );
  }
}

export default UnderlineHeading;
