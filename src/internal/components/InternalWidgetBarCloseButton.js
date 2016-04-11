import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalWidgetBarCloseButton = connect()(React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
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
}));
