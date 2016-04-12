import React, { PropTypes } from 'react';

export const AddSectionButton = React.createClass({
  propTypes: {
    addSection: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <button
        onClick={this.props.addSection}
        type="button"
        title="Add new section"
        className={this.props.className}
        style={this.props.style}>
          +
      </button>
    );
  },
});
