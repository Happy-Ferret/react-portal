import React, { PropTypes } from 'react';

export const InternalWidgetBarCloseButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
     
    removeWidget: PropTypes.func,
    style: PropTypes.object,
    WidgetBarCloseButton: PropTypes.func,
  },
  render() {
    const { WidgetBarCloseButton } = this.props;
    return (
      <WidgetBarCloseButton
        removeWidget={this.props.removeWidget}
        className={this.props.className}
        style={this.props.style}>
          {this.props.children}
      </WidgetBarCloseButton>
    );
  },
});
