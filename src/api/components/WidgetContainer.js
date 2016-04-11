/* eslint no-useless-constructor: 0 */

import React, { PropTypes } from 'react';

export const WidgetContainer = React.createClass({
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
