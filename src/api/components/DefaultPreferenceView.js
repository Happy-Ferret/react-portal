import React, { PropTypes } from 'react';

export const DefaultPreferenceView = React.createClass({
  propTypes: {
    className: PropTypes.string,
    globalStyle: PropTypes.object,
    style: PropTypes.object,
    preferences: PropTypes.object,
    savePreferences: PropTypes.func,
    showEdit: PropTypes.func,
    showView: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  getInitialState() {
    return {
      preferences: JSON.stringify(this.props.preferences, null, 2),
    };
  },
  onChangePreferenceJSON(e) {
    this.setState({ preferences: e.target.value });
  },
  onSave(e) {
    e.preventDefault();
    this.props.savePreferences(JSON.parse(this.state.preferences));
    this.props.showView();
  },
  onCancel(e) {
    e.preventDefault();
    this.props.showView();
  },
  render() {
    const {
      Container,
      TextContainer,
      TextArea,
      Buttons,
      ButtonSave,
      ButtonCancel,
    } = this.context.portalContext.style.DefaultPreferenceView;
    return (
      <div style={Container}>
        <div style={TextContainer}>
          <textarea
            style={TextArea}
            value={this.state.preferences}
            onChange={this.onChangePreferenceJSON} />
        </div>
        <div style={Buttons}>
          <button type="button" style={ButtonCancel} onClick={this.onCancel}>Cancel</button>
          <button type="button" style={ButtonSave} onClick={this.onSave}>Save</button>
        </div>
      </div>
    );
  },
});
