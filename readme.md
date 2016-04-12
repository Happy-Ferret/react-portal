# react-portal

A library to create fully customizable and stylable app. portals in React or Vanilla JS, powered by an immutable model

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Portal, PortalState } from 'react-portal';

import { PortalStyle } from './custom/style';
import { WidgetBarMoveButton, WidgetBarCloseButton } from './custom/components';

class MyPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portalState: PortalState.empty(),
      admin: false,
      page: 0,
    };
    this.onChange = (portalState) => this.setState({ portalState });
  }
  render() {
    const { portalState, admin, page } = this.state;
    return (
      <Portal
        page={page}
        admin={admin}
        style={PortalStyle}
        components={{ WidgetBarMoveButton, WidgetBarCloseButton }}
        portalState={portalState}
        onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
  <MyPortal />,
  document.getElementById('container')
);

```
