import React, { Component } from "react";
import { connect } from "react-redux";

class Test extends Component {
  state = {
    value: this.props.clientName,
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.clientChangeName(event.target.value);
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    clientName: state.clientName,
    channelId: ownProps.match.params.channelId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clientChangeName: (clientName) => {
      dispatch({ type: "CHANGE_NAME", clientName: clientName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
