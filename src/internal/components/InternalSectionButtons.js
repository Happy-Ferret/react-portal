import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalSectionButtons = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'SectionButtons');
    const style = maybeStyle(globalStyle, 'SectionButtons');
    const { SectionButtons } = this.context.portalContext.components;
    return (
      <SectionButtons className={className} style={style}>
        {children}
      </SectionButtons>
    );
  },
});
