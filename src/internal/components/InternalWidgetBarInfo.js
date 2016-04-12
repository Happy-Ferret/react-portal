import React, { PropTypes } from 'react';

export const InternalWidgetBarInfo = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
    description: PropTypes.string,
    WidgetBarInfo: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBarInfo } = this.props;
    return (
      <WidgetBarInfo
        description={this.props.description}
        className={this.props.className}
        style={this.props.style}>
          {this.props.children}
      </WidgetBarInfo>
    );
  },
});
