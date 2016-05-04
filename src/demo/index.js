import 'es6-shim';
// import 'es7-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Portal,
  PortalFactory,
  PortalState,
  defaultComponents,
  defaultStyle,
} from '../index';

const WidgetsCatalog = {

};

const initalPortalState = PortalState.build(
  PortalState.page(
    PortalState.section(
      PortalState.widget('RedditFunnyPics'),
      PortalState.widget('Wikipedia'),
      PortalState.widget('TodoList')
    ),
    PortalState.section(
      PortalState.widget('Calculator'),
      PortalState.widget('Google')
    )
  )
);

class MyPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portalState: initalPortalState,
      admin: false,
      page: 0,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(portalState) {
    this.setState({ portalState });
  }
  render() {
    const { portalState, admin, page } = this.state;
    return (
      <Portal
        page={page} admin={admin} widgetsCatalog={WidgetsCatalog}
        components={{ ...defaultComponents }}
        style={{ ...defaultStyle }}
        portalState={portalState}
        onChange={this.onChange} />
    );
  }
}

ReactDOM.render(
  <MyPortal />,
  document.getElementById('react-app')
);

PortalFactory.build({
  container: '#vanilla-app',
  portalState: PortalState.sample(),
  onChange(state) {
    console.log('new state', state.toJS());
  },
  widgetsCatalog: {},
});

/*
setTimeout(() => {
  console.log('admin', portal.getAdmin());
  console.log('page', portal.getPage());
  console.log('state', portal.getPortalState().toJS());
}, 500);
*/
