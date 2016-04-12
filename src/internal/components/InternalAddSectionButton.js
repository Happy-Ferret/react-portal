import React, { PropTypes } from 'react';

export const InternalAddSectionButton = React.createClass({
  propTypes: {
    addSection: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    AddSectionButton: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { AddSectionButton, addSection, children, className, style } = this.props;
    return (
      <AddSectionButton addSection={addSection} className={className} style={style}>
          {children}
      </AddSectionButton>
    );
  },
});
