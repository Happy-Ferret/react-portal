/* eslint max-len: 0 */

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
        title="Remove this widget"
        className={this.props.className}
        style={this.props.style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          width="10px"
          height="10px"
          viewBox="0.1 0.1 2000 1000"
          style={{ marginBottom: -1 }}
          enable-background="new 0.1 0.1 425 425">
          <path fill="#fff" d="m 1595.0297,1394.6794 356.5011,-331.1404 q 16.0225,-14.7996 16.0225,-34.224 0,-19.4245 -16.0225,-32.37411 L 1416.7792,501.15516 1951.5308,5.3694464 q 16.0225,-12.949627 16.0225,-32.3740644 0,-19.42444 -16.0225,-34.22402 L 1595.0297,-390.51916 q -16.0225,-14.79957 -37.052,-14.79957 -21.0296,0 -35.0493,14.79957 L 986.17407,103.41662 449.41969,-390.51916 q -14.0197,-14.79957 -35.04926,-14.79957 -21.02955,0 -37.05207,14.79957 L 20.817323,-61.228638 q -16.0225194,14.79958 -16.0225194,34.22402 0,19.4244374 16.0225194,32.3740644 L 555.56888,501.15516 20.817323,996.94089 Q 4.7948036,1009.8905 4.7948036,1029.315 q 0,19.4244 16.0225194,34.224 l 356.501037,329.2905 q 16.02252,14.7996 37.05207,14.7996 21.02956,0 35.04926,-14.7996 L 986.17407,898.89371 1522.9284,1394.6794 q 14.0197,12.9497 35.0493,12.9497 21.0295,0 37.052,-12.9497 z" />
         </svg>
      </button>
    );
  },
});
