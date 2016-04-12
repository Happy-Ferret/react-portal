import React, { PropTypes } from 'react';

export const WidgetBarInfo = React.createClass({
  propTypes: {
    className: PropTypes.string,
    description: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    if (!this.props.description) {
      return null;
    }
    return (
      <span
        className={this.props.className}
        type="button"
        title={this.props.description}
        style={this.props.style}>
          i
      </span>
    );
  },
});
