import React from 'react';

if (process.env.NODE_ENV === 'production') {
  module.exports = { Devtools: React.createClass({
    render() {
      return null;
    },
  }) };
} else {
  const createDevTools = require('redux-devtools').createDevTools;
  const LogMonitor = require('redux-devtools-log-monitor').default;
  const DockMonitor = require('redux-devtools-dock-monitor').default;
  module.exports = { Devtools: createDevTools(
    <DockMonitor
      toggleVisibilityKey="ctrl-m"
      changePositionKey="ctrl-p"
      defaultIsVisible={false}
      defaultPosition="right">
      <LogMonitor theme="solarized" />
    </DockMonitor>
  ) };
}
