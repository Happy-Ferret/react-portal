/* eslint no-param-reassign: 0 */
import React from 'react';
import { Widget, DOMWidget } from '../../api/Widget';

export class VoidWidget extends Widget {
  constructor(props) { // eslint-disable-line
    super(props);
  }
  renderView() {
    return (
      <div style={{
        width: 260,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}>
          <h3>Im void clazz !!!</h3>
      </div>
    );
  }
  renderEdit() {
    return (
      <div style={{
        width: 260,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}>
          <h3>Im edit clazz !!!</h3>
      </div>
    );
  }
}

VoidWidget.title = 'A void widget class';
VoidWidget.description = 'A void widget';
VoidWidget.defaultPrefs = {};
VoidWidget.hasPrefs = false;
VoidWidget.alwaysShowPrefs = false;
VoidWidget.cssAssets = [];
VoidWidget.jsAssets = [];

export class VoidWidgetDOM extends DOMWidget {
  constructor(props) { // eslint-disable-line
    super(props);
  }
  renderView(node) {
    node.innerHTML = `
      <div style="width: 260px; height: 100px;">
        <h3>Im void DOM !!!</h3>
      </div>`;
  }
  renderEdit(node) {
    node.innerHTML = `
      <div style="width: 260px; height: 100px;">
        <h3>Im edit DOM !!!</h3>
      </div>`;
  }
}

VoidWidgetDOM.title = 'A void widget DOM';
VoidWidgetDOM.description = 'A void widget';
VoidWidgetDOM.defaultPrefs = {};
VoidWidgetDOM.hasPrefs = false;
VoidWidgetDOM.alwaysShowPrefs = false;
VoidWidgetDOM.cssAssets = [];
VoidWidgetDOM.jsAssets = [];
