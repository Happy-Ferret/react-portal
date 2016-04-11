import React, { PropTypes } from 'react';

export const WidgetBarPreferencesButton = React.createClass({
  propTypes: {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  },
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="button"
        className={this.props.className}
        style={this.props.style}>
        p
      </button>
    );
  },
});
