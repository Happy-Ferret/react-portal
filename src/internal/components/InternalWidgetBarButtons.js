import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalWidgetBarButtons = connect()(React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    WidgetBarButtons: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBarButtons } = this.props;
    return (
      <WidgetBarButtons className={this.props.className} style={this.props.style}>
        {this.props.children}
      </WidgetBarButtons>
    );
  },
}));
