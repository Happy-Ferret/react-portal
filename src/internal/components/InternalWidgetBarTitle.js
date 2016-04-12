import React, { PropTypes } from 'react';

export const InternalWidgetBarTitle = React.createClass({
  propTypes: {
    children: PropTypes.arrayOf(PropTypes.element),
    className: PropTypes.string,
     
    WidgetBarTitle: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
  },
  render() {
    const { WidgetBarTitle } = this.props;
    return (
      <WidgetBarTitle
        title={this.props.title}
        className={this.props.className}
        style={this.props.style}>
          {this.props.children}
      </WidgetBarTitle>
    );
  },
});
