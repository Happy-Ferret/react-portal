import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalWidgetBarMoveButton = connect()(React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
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
}));
