import React, { PropTypes } from 'react';

export const InternalWidgetBarInfo = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    dispatch: PropTypes.func,
    WidgetBarInfo: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBarInfo } = this.props;
    return (
      <WidgetBarInfo className={this.props.className} style={this.props.style}>
        {this.props.children}
      </WidgetBarInfo>
    );
  },
});
