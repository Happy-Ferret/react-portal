import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBar = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    if (!this.context.portalContext.admin && this.context.portalContext.noWidgetBar) {
      return null;
    }
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBar');
    const style = maybeStyle(globalStyle, 'WidgetBar');
    const { WidgetBar } = this.context.portalContext.components;
    return (
      <WidgetBar className={className} style={style}>
        {children}
      </WidgetBar>
    );
  },
});
