import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetBarPreferencesButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    showPreferences: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children, showPreferences } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetBarPreferencesButton');
    const style = maybeStyle(globalStyle, 'WidgetBarPreferencesButton');
    const { WidgetBarPreferencesButton } = this.context.portalContext.components;
    return (
      <WidgetBarPreferencesButton
        onClick={showPreferences}
        className={className}
        style={style}>
          {children}
      </WidgetBarPreferencesButton>
    );
  },
});
