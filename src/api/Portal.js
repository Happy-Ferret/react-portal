import React from 'react';

import { InternalPortal } from '../internal/components/InternalPortal';

/* exists only for public API purposes */
export const Portal = React.createClass({
  render() {
    return (
      <InternalPortal {...this.props} />
    );
  },
});
