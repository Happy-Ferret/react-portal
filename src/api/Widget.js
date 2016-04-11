/* eslint no-useless-constructor: 0, no-else-return: 0 */

import React, { PropTypes } from 'react';
import { autoBind } from '../utils';

export class Widget extends React.Component {
  constructor(props) {
    super(props);
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
  componentDidMount() {
    this.externalRender();
  }
  componentDidUpdate() {
    this.externalRender();
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
  render() {
    return (
      <div ref={this.catchRefNode}></div>
    );
  }
}

DOMWidget.propTypes = {
  mode: PropTypes.oneOf(['view', 'edit']),
};
