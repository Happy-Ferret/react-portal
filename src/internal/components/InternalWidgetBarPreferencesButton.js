import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalWidgetBarPreferencesButton = connect()(React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    onClick: PropTypes.func,
    WidgetBarPreferencesButton: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBarPreferencesButton } = this.props;
    return (
      <WidgetBarPreferencesButton
        onClick={this.props.onClick}
        className={this.props.className}
        style={this.props.style}>
          {this.props.children}
      </WidgetBarPreferencesButton>
    );
  },
}));
