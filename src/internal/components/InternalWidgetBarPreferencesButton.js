import React, { PropTypes } from 'react';

export const InternalWidgetBarPreferencesButton = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
     
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
});
