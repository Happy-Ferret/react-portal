import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarInfo = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    description: PropTypes.string,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children, description } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarInfo');
    const style = maybeStyle(globalStyle, 'WidgetBarInfo');
    const { WidgetBarInfo } = this.context.portalContext.components;
    return (
      <WidgetBarInfo
        description={description}
        className={className}
        style={style}>
          {children}
      </WidgetBarInfo>
    );
  },
});
