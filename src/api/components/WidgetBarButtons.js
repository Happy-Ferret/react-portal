import React, { PropTypes } from 'react';

export const WidgetBarButtons = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  },
});
