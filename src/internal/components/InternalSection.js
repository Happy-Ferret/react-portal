import React, { PropTypes } from 'react';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalSection = React.createClass({
  propTypes: {
    addWidget: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    id: PropTypes.string,
    position: PropTypes.number,
    removeSection: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  render() {
    const { addWidget, removeSection, children, id, position } = this.props;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'Section');
    const style = maybeStyle(globalStyle, 'Section');
    const { Section } = this.context.portalContext.components;
    return (
      <Section
        id={id}
        position={position}
        addWidget={addWidget}
        removeSection={removeSection}
        className={className}
        style={style}>
        {children}
      </Section>
    );
  },
});
