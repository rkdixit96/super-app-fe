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
      disabled: false,
    };

    this.addRemove = this.addRemove.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
  }

  componentDidMount() {
    this.checkDisabled();
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


  checkDisabled() {
    if (this.props.item.availableQuantity === 0) {
      this.setState({
        disabled: true,
      });
      return;
    }
    this.setState({
      disabled: false,
    });
  }

  render() {
    return (
      <div className="AddRemoveBar" >
        <input type="button" value="-" onClick={this.addRemove} disabled={this.state.disabled} />
        <div>
          {(this.props.item.availableQuantity !== 0) && (<div className="button-center-text"> {`${this.state.count} in basket`} </div>)}
          {(this.props.item.availableQuantity === 0) && (<div className="button-center-text-sold"> SOLD OUT </div>)}
        </div>
        <input type="button" value="+" onClick={this.addRemove} disabled={this.state.disabled} />
      </div>
    );
  }
}

export default AddRemoveBar;
