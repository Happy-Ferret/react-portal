import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalAddWidgetButton = React.createClass({
  propTypes: {
    addWidget: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { addWidget, children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'AddWidgetButton');
    const style = maybeStyle(globalStyle, 'AddWidgetButton');
    const { AddWidgetButton } = this.context.portalContext.components;
    return (
      <AddWidgetButton addWidget={addWidget} className={className} style={style}>
        {children}
      </AddWidgetButton>
    );
  },
});
