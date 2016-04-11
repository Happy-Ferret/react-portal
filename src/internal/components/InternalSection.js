import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalSection = connect()(React.createClass({
  propTypes: {
    addWidget: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    id: PropTypes.string,
    position: PropTypes.number,
    Section: PropTypes.func,
    style: PropTypes.object,
    removeSection: PropTypes.func,
  },
  render() {
    const { Section } = this.props;
    // TODO : add section buttons
    return (
      <Section
        addWidget={this.props.addWidget}
        removeSection={this.props.removeSection}
        className={this.props.className}
        style={this.props.style}>
        {this.props.children}
      </Section>
    );
  },
}));
