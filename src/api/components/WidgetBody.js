import React, { PropTypes } from 'react';

export const WidgetBody = React.createClass({
  propTypes: {
    children: PropTypes.any,
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
