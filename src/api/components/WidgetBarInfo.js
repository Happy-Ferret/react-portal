import React, { PropTypes } from 'react';

export const WidgetBarInfo = React.createClass({
  propTypes: {
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        infos
      </div>
    );
  },
});
