import React, { PropTypes } from 'react';

export const RemoveSectionButton = React.createClass({
  propTypes: {
    removeSection: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  },
  render() {
    return (
      <button
        onClick={this.props.removeSection}
        type="button"
        title="Remove this section"
        className={this.props.className}
        style={this.props.style}>
          -
      </button>
    );
  },
});
