import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const InternalWidgetBar = connect()(React.createClass({
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
}));
