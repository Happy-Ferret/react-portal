/* eslint max-len: 0 */

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
      <div
        style={this.props.style}
        className={this.props.className}
        title={this.props.description}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="12px"
          height="12px"
          viewBox="0 0 425 425"
          style={{ marginTop: 5 }}
          enable-background="new 0 0 425 425">
          <path fill="#888" d="M0,211.631C0,94.8,94.8,0,211.369,0C328.2,0,423,94.8,423,211.631 C423,328.2,328.2,423,211.369,423C94.8,423,0,328.2,0,211.631z" />
          <path fill="#FFFFFF" d="M192.188,85.623v52.914h42.174V85.623H192.188z M160.505,159.755 v42.161h31.683v74.132h-31.683v42.161h31.683h42.174h31.683v-42.161h-31.683v-74.132v-42.161H160.505z" />
        </svg>
      </div>
    );
  },
});
