import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      title: PropTypes.string,
    };
    Header.defaultProps = {
      title: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="Header" >
        <div>
          {this.props.title}
        </div>
        <div className="header-buttons">
          <div>
            All Orders
          </div>
          <div>
            My basket
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
