import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBody = React.createClass({
  propTypes: {
    children: PropTypes.any,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBody');
    const style = maybeStyle(globalStyle, 'WidgetBody');
    const { WidgetBody } = this.context.portalContext.components;
    return (
      <WidgetBody className={className} style={style}>
        {children}
      </WidgetBody>
    );
  },
});
