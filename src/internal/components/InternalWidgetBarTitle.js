import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarTitle = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    title: PropTypes.string,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children, title } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarTitle');
    const style = maybeStyle(globalStyle, 'WidgetBarTitle');
    const { WidgetBarTitle } = this.context.portalContext.components;
    return (
      <WidgetBarTitle
        title={title}
        className={className}
        style={style}>
          {children}
      </WidgetBarTitle>
    );
  },
});
