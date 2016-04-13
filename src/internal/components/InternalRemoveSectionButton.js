import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalRemoveSectionButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    removeSection: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { children, removeSection } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'RemoveSectionButton');
    const style = maybeStyle(globalStyle, 'RemoveSectionButton');
    const { RemoveSectionButton } = this.context.portalContext.components;
    return (
      <RemoveSectionButton removeSection={removeSection} className={className} style={style}>
        {children}
      </RemoveSectionButton>
    );
  },
});
