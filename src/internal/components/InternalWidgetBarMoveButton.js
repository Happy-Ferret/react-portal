import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarMoveButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarMoveButton');
    const style = maybeStyle(globalStyle, 'WidgetBarMoveButton');
    const { WidgetBarMoveButton } = this.context.portalContext.components;
    return (
      <WidgetBarMoveButton className={className} style={style}>
        {children}
      </WidgetBarMoveButton>
    );
  },
});
