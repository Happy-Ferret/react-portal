import React, { PropTypes } from 'react';

export const InternalSectionButtons = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    SectionButtons: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { SectionButtons } = this.props;
    return (
      <SectionButtons className={this.props.className} style={this.props.style}>
        {this.props.children}
      </SectionButtons>
    );
  },
});
