import React, { PropTypes } from 'react';

export const InternalWidgetBarButtons = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
     
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
});
