import React, { PropTypes } from 'react';

export const Section = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    style: PropTypes.object,
    removeSection: PropTypes.func,
    addWidget: PropTypes.func,
  },
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  },
});
