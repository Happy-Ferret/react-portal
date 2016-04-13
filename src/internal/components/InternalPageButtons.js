import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalPageButtons = React.createClass({
  propTypes: {
    children: PropTypes.element,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'PageButtons');
    const style = maybeStyle(globalStyle, 'PageButtons');
    const { PageButtons } = this.context.portalContext.components;
    return (
      <PageButtons className={className} style={style}>
        {children}
      </PageButtons>
    );
  },
});
