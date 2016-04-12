import React, { PropTypes } from 'react';

export const PageButtons = React.createClass({
  propTypes: {
    children: PropTypes.element,
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
