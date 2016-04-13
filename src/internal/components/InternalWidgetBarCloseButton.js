import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarCloseButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    removeWidget: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children, removeWidget } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarCloseButton');
    const style = maybeStyle(globalStyle, 'WidgetBarCloseButton');
    const { WidgetBarCloseButton } = this.context.portalContext.components;
    return (
      <WidgetBarCloseButton
        removeWidget={removeWidget}
        className={className}
        style={style}>
          {children}
      </WidgetBarCloseButton>
    );
  },
});
