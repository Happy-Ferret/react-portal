import React, { PropTypes } from 'react';

export const WidgetBarCloseButton = React.createClass({
  propTypes: {
    className: PropTypes.string,
    removeWidget: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    return (
      <button
        onClick={this.props.removeWidget}
        type="button"
        className={this.props.className}
        style={this.props.style}>
          x
      </button>
    );
  },
});
