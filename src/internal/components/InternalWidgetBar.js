import React, { PropTypes } from 'react';

export const InternalWidgetBar = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    WidgetBar: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBar } = this.props;
    return (
      <WidgetBar className={this.props.className} style={this.props.style}>
        {this.props.children}
      </WidgetBar>
    );
  },
});
