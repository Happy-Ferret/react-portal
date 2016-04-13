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
    children: PropTypes.element,
    components: PropTypes.object,
    globalStyle: PropTypes.object,
    id: PropTypes.string,
    position: PropTypes.number,
    preferences: PropTypes.object,
    size: PropTypes.object,
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
      components,
      widget,
      WidgetEditComponent,
      WidgetViewComponent,
    } = this.props;
    const { WidgetContainer, WidgetBody } = components;
    const title = WidgetViewComponent.title;
    const description = WidgetViewComponent.description;
    const View = this.state.mode === 'view' ? WidgetViewComponent : WidgetEditComponent;
    const globalStyle = this.context.portalContext.style;
    const className = maybeClassName(globalStyle, 'WidgetContainer');
    const style = maybeStyle(globalStyle, 'WidgetContainer');
    return (
      <WidgetContainer className={className} style={style}>
        <InternalWidgetBar>
          <InternalWidgetBarInfo
            description={description} />
          <InternalWidgetBarTitle {...widget} title={title} />
          <InternalWidgetBarButtons>
            <InternalWidgetBarPreferencesButton
              {...widget}
              showPreferences={this.state.mode === 'view' ? this.showEdit : this.showView} />
            <InternalWidgetBarMoveButton {...widget} />
            <InternalWidgetBarCloseButton
              {...widget}
              removeWidget={this.props.removeWidget} />
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
