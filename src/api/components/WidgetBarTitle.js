import React, { PropTypes } from 'react';

export const WidgetBarTitle = React.createClass({
  propTypes: {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
  },
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.title}
      </div>
    );
  },
});
