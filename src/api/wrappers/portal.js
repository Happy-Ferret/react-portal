import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

import { Portal } from '../Portal';
import { PortalState } from '../state/portalState';
import { eventBus } from '../../utils';

const WrappedPortal = React.createClass({
  propTypes: {
    channel: PropTypes.object,
    portalState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  },
  getInitialState() {
    return {
      portalState: PortalState.emptyState(),
      admin: false,
      page: 0,
    };
  },
  componentDidMount() {
    this.unsubscribe = this.props.channel.subscribe(this.handleCommand);
    this.setState({ portalState: this.props.portalState }); // eslint-disable-line
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  handleChange(newPortalState) {
    if (this.props.onChange) {
      this.props.onChange(newPortalState);
    }
    this.setState({ portalState: newPortalState });
  },
  handleCommand(command) {
    switch (command.type) {
      case 'SET_PAGE':
        return this.setState({ page: command.payload });
      case 'GET_PAGE':
        command.page = this.state.page; // eslint-disable-line
        return this.state.page;
      case 'GET_ADMIN':
        command.admin = this.state.admin; // eslint-disable-line
        return this.state.admin;
      case 'SET_ADMIN':
        return this.setState({ admin: command.payload });
      case 'SET_PORTAL_STATE':
        return this.setState({ portalState: command.payload });
      case 'GET_PORTAL_STATE':
        command.portalState = this.state.portalState; // eslint-disable-line
        return this.state.portalState;
      default:
        return null;
    }
  },
  render() {
    return (
      <Portal
        {...this.props}
        portalState={this.state.portalState}
        onChange={this.handleChange} />
    );
  },
});

export const PortalFactory = {
  build(options) {
    const { container } = options;
    const portalChannel = eventBus();
    const api = {
      getPortalState() {
        const command = { type: 'GET_PORTAL_STATE' };
        portalChannel.dispatch(command);
        return command.portalState;
      },
      setPortalState(payload) {
        const command = { type: 'SET_PORTAL_STATE', payload };
        portalChannel.dispatch(command);
      },
      setPage(payload) {
        const command = { type: 'SET_PAGE', payload };
        portalChannel.dispatch(command);
      },
      getPage() {
        const command = { type: 'GET_PAGE' };
        portalChannel.dispatch(command);
        return command.page;
      },
      getAdmin() {
        const command = { type: 'GET_ADMIN' };
        portalChannel.dispatch(command);
        return command.admin;
      },
      setAdmin(payload) {
        const command = { type: 'SET_ADMIN', payload };
        portalChannel.dispatch(command);
      },
    };
    ReactDOM.render(
      <WrappedPortal {...options} channel={portalChannel} />,
      document.querySelector(container));
    return api;
  },
};
