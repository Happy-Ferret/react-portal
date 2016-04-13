/* eslint max-len: 0 */

import React, { PropTypes } from 'react';

export const AddSectionButton = React.createClass({
  propTypes: {
    addSection: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <button
        onClick={this.props.addSection}
        type="button"
        title="Add new section"
        className={this.props.className}
        style={this.props.style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          width="10px"
          height="10px"
          style={{ marginBottom: -1 }}
          viewBox="0.1 0.1 2000 1000"
          enable-background="new 0.1 0.1 425 425">
          <path fill="#fff" d="m 777.04965,1341.946 442.85625,-0.1301 q 19.8477,0.042 32.9048,-11.0358 13.0571,-11.0775 11.8622,-26.9438 l 2.8696,-565.80493 663.6626,0.33126 q 18.6041,1.09652 31.6612,-9.98085 13.057,-11.07738 13.1058,-27.99872 l 1.0839,-376.49999 q 0.049,-16.92134 -12.9443,-28.05323 -12.9932,-11.1319 -31.6035,-10.11326 l -663.6564,-2.44642 0.3885,-565.81016 q 1.2862,-15.86116 -11.7069,-26.99306 -12.9932,-11.13189 -32.8409,-11.17343 l -441.61271,-0.92491 q -19.84775,-0.0416 -32.90481,11.03584 -13.05707,11.07738 -11.86226,26.94373 L 735.4432,282.15314 71.780654,281.82188 q -18.60423,-1.09652 -31.661296,9.98085 -13.057064,11.07739 -13.105783,27.99873 l -1.083994,376.49998 q -0.04872,16.92135 12.944402,28.05323 12.993123,11.1319 31.603443,10.11326 l 663.656464,2.44643 -1.63208,566.86504 q -0.0426,14.8063 12.95048,25.9381 12.99314,11.1319 31.59736,12.2285 z" />
        </svg>
      </button>
    );
  },
});
