import React, { PropTypes } from 'react';

export const AddWidgetButton = React.createClass({
  propTypes: {
    addWidget: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <button
        onClick={this.props.addWidget}
        type="button"
        title="Add new widget"
        className={this.props.className}
        style={this.props.style}>
          +
      </button>
    );
  },
});
