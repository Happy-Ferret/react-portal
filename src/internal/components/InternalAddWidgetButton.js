import React, { PropTypes } from 'react';

export const InternalAddWidgetButton = React.createClass({
  propTypes: {
    addWidget: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    AddWidgetButton: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { AddWidgetButton, addWidget, className, children, style } = this.props;
    return (
      <AddWidgetButton addWidget={addWidget} className={className} style={style}>
        {children}
      </AddWidgetButton>
    );
  },
});
