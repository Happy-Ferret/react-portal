import React, { PropTypes } from 'react';

export const InternalPageButtons = React.createClass({
  propTypes: {
    children: PropTypes.element,
    className: PropTypes.string,
    PageButtons: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { PageButtons } = this.props;
    return (
      <PageButtons className={this.props.className} style={this.props.style}>
        {this.props.children}
      </PageButtons>
    );
  },
});
