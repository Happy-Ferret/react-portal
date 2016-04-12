/* eslint no-param-reassign: 0 */
import React from 'react';
import { Widget } from '../../api/Widget';

export class WidgetNotFound extends Widget {
  renderView() {
    return (
      <div style={this.props.globalStyle.WidgetNotFound}>
          <h3>Unable to find your widget</h3>
      </div>
    );
  }
}

WidgetNotFound.title = '';
WidgetNotFound.description = null;
WidgetNotFound.defaultPrefs = {};
WidgetNotFound.hasPrefs = false;
WidgetNotFound.alwaysShowPrefs = false;
WidgetNotFound.cssAssets = [];
WidgetNotFound.jsAssets = [];

/*
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
*/
