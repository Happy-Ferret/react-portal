import React, { PropTypes } from 'react';

export const InternalWidgetBody = React.createClass({
  propTypes: {
    children: PropTypes.any,
    className: PropTypes.string,
    dispatch: PropTypes.func,
    WidgetBody: PropTypes.func,
    style: PropTypes.object,
  },
  render() {
    const { WidgetBody } = this.props;
    return (
      <WidgetBody className={this.props.className} style={this.props.style}>
        {this.props.children}
      </WidgetBody>
    );
  },
});
