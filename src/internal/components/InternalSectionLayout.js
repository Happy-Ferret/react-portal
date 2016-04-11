import React, { PropTypes } from 'react';

export const InternalSectionLayout = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    SectionLayout: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { SectionLayout } = this.props;
    return (
      <SectionLayout className={this.props.className} style={this.props.style}>
        {this.props.children}
      </SectionLayout>
    );
  },
});
