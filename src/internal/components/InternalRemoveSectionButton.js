import React, { PropTypes } from 'react';

export const InternalRemoveSectionButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    removeSection: PropTypes.func,
    RemoveSectionButton: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { RemoveSectionButton, className, children, style, removeSection } = this.props;
    return (
      <RemoveSectionButton removeSection={removeSection} className={className} style={style}>
        {children}
      </RemoveSectionButton>
    );
  },
});
