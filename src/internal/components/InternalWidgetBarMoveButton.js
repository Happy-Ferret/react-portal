import React, { PropTypes } from 'react';

export const InternalWidgetBarMoveButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
     
    WidgetBarMoveButton: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBarMoveButton } = this.props;
    return (
      <WidgetBarMoveButton className={this.props.className} style={this.props.style}>
        {this.props.children}
      </WidgetBarMoveButton>
    );
  },
});
