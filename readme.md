# react-portal

A library to create fully customizable and stylable app. portals in React or Vanilla JS, powered by an immutable model

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Portal, PortalState, defaultComponents, defaultStyle } from 'react-portal';

// imports from your own modules
import { PortalStyle } from './custom/style';
import { WidgetBarMoveButton, WidgetBarCloseButton } from './custom/components';
import * as WidgetsCatalog from './widgets';

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
        page={page} admin={admin} widgetsCatalog={WidgetsCatalog}
        components={{ ...defaultComponents, WidgetBarMoveButton, WidgetBarCloseButton }}
        style={{ ...defaultStyle, PortalStyle }}
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

You can notice that you have the full control over the state of the Portal component, every components style and very internal components or text label of your portal instance.

The list of overriden styles is passed through the `style` props of `<Portal />`, default style can be found [here](https://github.com/mathieuancelin/react-portal/blob/master/src/api/style/index.js)

The list of overriden graphical components is passed through the `components` props of `<Portal />`, default components list can be found [here](https://github.com/mathieuancelin/react-portal/tree/master/src/api/components)

*You are not obliged to use React to instanciate the Portal or to write Widgets. Vanilla JS API are also available* but you are obliged to use `React` to redefine internal components of your `<Portal />` instance
