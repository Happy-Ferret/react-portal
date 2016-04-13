import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalAddSectionButton = React.createClass({
  propTypes: {
    addSection: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { addSection, children } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'AddSectionButton');
    const style = maybeStyle(globalStyle, 'AddSectionButton');
    const { AddSectionButton } = this.context.portalContext.components;
    return (
      <AddSectionButton addSection={addSection} className={className} style={style}>
          {children}
      </AddSectionButton>
    );
  },
});
