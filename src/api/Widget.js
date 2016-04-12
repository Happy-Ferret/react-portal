/* eslint no-useless-constructor: 0, no-else-return: 0 */

import React, { PropTypes } from 'react';
import { autoBind } from '../utils';

import { DefaultPreferenceView } from '../api/components/DefaultPreferenceView';

export class Widget extends React.Component {
  constructor(props) {
    super(props);
  }
  renderEdit() {
    return (
      <DefaultPreferenceView {...this.props} />
    );
  }
  render(...args) {
    if (this.props.mode === 'view') {
      return this.renderView(...args);
    } else {
      return this.renderEdit(...args);
    }
  }
}

Widget.propTypes = {
  mode: PropTypes.oneOf(['view', 'edit']),
  preferences: PropTypes.object,
  savePreferences: PropTypes.func,
  showEdit: PropTypes.func,
  showView: PropTypes.func,
};

export class DOMWidget extends React.Component {
  constructor(props) {
    super(props);
    this.catchRefNode = this.catchRefNode.bind(this);
    this.externalRender = this.externalRender.bind(this);
    this.redraw = this.externalRender.bind(this);
    autoBind(this);
    if (this.init) {
      this.init.bind(this)(props);
    }
  }
  componentWillMount() {
    if (this.widgetWillMount) {
      this.widgetWillMount();
    }
  }
  componentDidMount() {
    this.externalRender();
    if (this.widgetDidMount) {
      this.widgetDidMount();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.widgetWillReceiveProps) {
      this.widgetWillReceiveProps(nextProps);
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (this.widgetWillUpdate) {
      this.widgetWillUpdate(nextProps, nextState);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this.externalRender();
    if (this.widgetDidUpdate) {
      this.widgetDidUpdate(prevProps, prevState);
    }
  }
  componentWillUnmount() {
    if (this.widgetWillUnmount) {
      this.widgetWillUnmount();
    }
  }
  externalRender() {
    if (this.props.mode === 'view') {
      return this.renderView(this.refNode, this.props);
    } else {
      return this.renderEdit(this.refNode, this.props);
    }
  }
  catchRefNode(node) {
    this.refNode = node;
  }
  renderEdit() {
    return (
      <DefaultPreferenceView {...this.props} />
    );
  }
  render() {
    return (
      <div ref={this.catchRefNode}></div>
    );
  }
}

DOMWidget.propTypes = {
  mode: PropTypes.oneOf(['view', 'edit']),
  preferences: PropTypes.object,
  savePreferences: PropTypes.func,
  showEdit: PropTypes.func,
  showView: PropTypes.func,
};
