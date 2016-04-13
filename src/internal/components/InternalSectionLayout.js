import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalSectionLayout = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'SectionLayout');
    const style = maybeStyle(globalStyle, 'SectionLayout');
    const { SectionLayout } = this.context.portalContext.components;
    return (
      <SectionLayout className={className} style={style}>
        {children}
      </SectionLayout>
    );
  },
});
