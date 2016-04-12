import React, { PropTypes } from 'react';

import { InternalWidgetBar } from './InternalWidgetBar';
import { InternalWidgetBarButtons } from './InternalWidgetBarButtons';
import { InternalWidgetBarInfo } from './InternalWidgetBarInfo';
import { InternalWidgetBarTitle } from './InternalWidgetBarTitle';
import { InternalWidgetBarPreferencesButton } from './InternalWidgetBarPreferencesButton';
import { InternalWidgetBarMoveButton } from './InternalWidgetBarMoveButton';
import { InternalWidgetBarCloseButton } from './InternalWidgetBarCloseButton';
import { InternalWidgetBody } from './InternalWidgetBody';

import { maybeClassName, maybeStyle } from '../../utils';

export const InternalWidgetContainer = React.createClass({
  propTypes: {
    className: PropTypes.string,
    children: PropTypes.element,
    components: PropTypes.object,
    globalStyle: PropTypes.object,
    id: PropTypes.string,
    position: PropTypes.number,
    preferences: PropTypes.object,
    size: PropTypes.object,
    style: PropTypes.object,
    widget: PropTypes.object,
    widgetModel: PropTypes.object,
    removeWidget: PropTypes.func,
    WidgetEditComponent: PropTypes.func,
    WidgetViewComponent: PropTypes.func,
  },
  contextTypes: {
    portalContext: React.PropTypes.object,
  },
  getInitialState() {
    return {
      mode: 'view',
    };
  },
  getPreferences() {
    return this.props.preferences;
  },
  getPortalState() {
    return this.context.portalContext.portalState;
  },
  showEdit() {
    this.setState({ mode: 'edit' });
  },
  showView() {
    this.setState({ mode: 'view' });
  },
  updatePortalState(newState) {
    this.context.portalContext.onChange(newState);
  },
  savePreferences(newPreferences) {
    const newWidgetModel = this.props.widgetModel.updatePreferences(newPreferences);
    const newState = newWidgetModel.mergeIntoModel(this.getPortalState());
    this.updatePortalState(newState);
  },
  render() {
    const {
      globalStyle,
      components,
      widget,
      WidgetEditComponent,
      WidgetViewComponent,
    } = this.props;
    const { WidgetContainer, WidgetBody } = components;
    const title = WidgetViewComponent.title;
    const description = WidgetViewComponent.description;
    const View = this.state.mode === 'view' ? WidgetViewComponent : WidgetEditComponent;
    return (
      <WidgetContainer className={this.props.className} style={this.props.style}>
        <InternalWidgetBar
          className={maybeClassName(globalStyle, 'WidgetBar')}
          style={maybeStyle(globalStyle, 'WidgetBar')}
          WidgetBar={components.WidgetBar}>
          <InternalWidgetBarInfo
            description={description}
            className={maybeClassName(globalStyle, 'WidgetBarInfo')}
            style={maybeStyle(globalStyle, 'WidgetBarInfo')}
            WidgetBarInfo={components.WidgetBarInfo} />
          <InternalWidgetBarTitle
            {...widget}
            title={title}
            className={maybeClassName(globalStyle, 'WidgetBarTitle')}
            style={maybeStyle(globalStyle, 'WidgetBarTitle')}
            WidgetBarTitle={components.WidgetBarTitle} />
          <InternalWidgetBarButtons
            className={maybeClassName(globalStyle, 'WidgetBarButtons')}
            style={maybeStyle(globalStyle, 'WidgetBarButtons')}
            WidgetBarButtons={components.WidgetBarButtons} >
            <InternalWidgetBarPreferencesButton
              {...widget}
              className={maybeClassName(globalStyle, 'WidgetBarPreferencesButton')}
              style={maybeStyle(globalStyle, 'WidgetBarPreferencesButton')}
              onClick={this.state.mode === 'view' ? this.showEdit : this.showView}
              WidgetBarPreferencesButton={components.WidgetBarPreferencesButton} />
            <InternalWidgetBarMoveButton
              {...widget}
              className={maybeClassName(globalStyle, 'WidgetBarMoveButton')}
              style={maybeStyle(globalStyle, 'WidgetBarMoveButton')}
              WidgetBarMoveButton={components.WidgetBarMoveButton} />
            <InternalWidgetBarCloseButton
              {...widget}
              className={maybeClassName(globalStyle, 'WidgetBarCloseButton')}
              style={maybeStyle(globalStyle, 'WidgetBarCloseButton')}
              removeWidget={this.props.removeWidget}
              WidgetBarCloseButton={components.WidgetBarCloseButton} />
          </InternalWidgetBarButtons>
        </InternalWidgetBar>
        <InternalWidgetBody WidgetBody={WidgetBody}>
          <View
            widgetModel={this.props.widgetModel}
            globalStyle={this.props.globalStyle}
            preferences={this.props.preferences}
            mode={this.state.mode}
            savePreferences={this.savePreferences}
            showView={this.showView}
            showEdit={this.showEdit} />
        </InternalWidgetBody>
      </WidgetContainer>
    );
  },
});
