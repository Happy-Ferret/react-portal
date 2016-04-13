import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarButtons = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarButtons');
    const style = maybeStyle(globalStyle, 'WidgetBarButtons');
    const { WidgetBarButtons } = this.context.portalContext.components;
    return (
      <WidgetBarButtons className={className} style={style}>
        {children}
      </WidgetBarButtons>
    );
  },
});
