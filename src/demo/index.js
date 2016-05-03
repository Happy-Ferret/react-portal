import { PortalFactory, PortalState } from '../index';

let portalState = PortalState.sample();

const portal = PortalFactory.build({
  container: '#app',
  portalState,
  onChange(state) {
    console.log('new portal', state.toJS());
    portalState = state;
  },
  widgetsCatalog: {},
});

setTimeout(() => {
  console.log('admin', portal.getAdmin());
  console.log('page', portal.getPage());
  console.log('state', portal.getPortalState().toJS());
}, 500);
