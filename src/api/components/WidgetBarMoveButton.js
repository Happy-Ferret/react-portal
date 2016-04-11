import React, { PropTypes } from 'react';

export const WidgetBarMoveButton = React.createClass({
  propTypes: {
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <button type="button" className={this.props.className} style={this.props.style}>
        m
      </button>
    );
  },
});
