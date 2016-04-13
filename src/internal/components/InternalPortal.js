import React, { PropTypes } from 'react';

import { InternalSectionLayout } from './InternalSectionLayout';
import { InternalSection } from './InternalSection';
import { InternalWidgetContainer } from './InternalWidgetContainer';
import { InternalPageButtons } from './InternalPageButtons';
import { InternalAddSectionButton } from './InternalAddSectionButton';
import { InternalSectionButtons } from './InternalSectionButtons';
import { InternalRemoveSectionButton } from './InternalRemoveSectionButton';
import { InternalAddWidgetButton } from './InternalAddWidgetButton';

import { maybeClassName, maybeStyle, isString } from '../../utils';

import { defaultStyle } from '../../api/style';
import { defaultComponents } from '../../api/components';

export const InternalPortal = React.createClass({
  propTypes: {
    admin: PropTypes.bool,
    page: PropTypes.number,
    portalState: PropTypes.object.isRequired,
    widgetsCatalog: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onPageLoad: PropTypes.func,
    components: PropTypes.object,
    style: PropTypes.object,
  },
  childContextTypes: {
    portalContext: React.PropTypes.object,
  },
  getDefaultProps() {
    return {
      admin: false,
      page: 0,
      onChange: this.onChange,
      onPageLoad: this.onPageLoad,
      components: defaultComponents,
      style: defaultStyle,
    };
  },
  getChildContext() {
    return {
      portalContext: {
        ...this.props,
        components: this.props.components,
        style: this.props.style,
      },
    };
  },
  removeWidget(fromPage, fromSection, widget) {
    const newState = this.props.portalState.removeWidget(fromPage, fromSection, widget);
    this.props.onChange(newState);
  },
  removeSection(fromPage, section) {
    const newState = this.props.portalState.removeSection(fromPage, section);
    this.props.onChange(newState);
  },
  addSection(toPage, section) {
    const newState = this.props.portalState.addSection(toPage, section);
    this.props.onChange(newState);
  },
  addWidget(toPage, toSection, widget) {
    const newState = this.props.portalState.addWidget(toPage, toSection, widget);
    this.props.onChange(newState);
  },
  render() {
    const page = this.props.portalState.findPageByPosition(this.props.page);
    const { style, components } = this.props;
    return (
      <div
        className={maybeClassName(style, 'Portal')}
        style={maybeStyle(style, 'Portal')}>
        <InternalSectionLayout>
          {
            page.sections().map(section =>
              <InternalSection
                key={section.id()}
                id={section.id()}
                position={section.position()}
                removeSection={this.removeSection
                  .bind(this, { id: page.id() }, { id: section.id() })}
                addWidget={this.addWidget
                  .bind(this, { id: page.id() }, { id: section.id() })}>
                {
                  section.widgets().map(widgetModel => {
                    const widget = widgetModel.toJS();
                    const modeView = isString(widget.widget) ? widget.widget : widget.widget.view;
                    const modeEdit = isString(widget.widget) ? widget.widget : widget.widget.edit;
                    const WidgetViewComponent =
                      this.props.widgetsCatalog[modeView] || components.WidgetNotFound;
                    const WidgetEditComponent =
                      this.props.widgetsCatalog[modeEdit] || components.WidgetNotFound;
                    return (
                      <InternalWidgetContainer
                        {...widget}
                        widgetModel={widgetModel}
                        key={widget.id}
                        components={components}
                        removeWidget={this.removeWidget
                          .bind(this, { id: page.id() }, { id: section.id() }, widget)}
                        WidgetEditComponent={WidgetEditComponent}
                        WidgetViewComponent={WidgetViewComponent} />
                    );
                  }).concat(<InternalSectionButtons key="InternalSectionButtons">
                    <InternalRemoveSectionButton
                      removeSection={this.removeSection.bind(this, { id: page.id() })} />
                    <InternalAddWidgetButton
                      addWidget={this.addWidget
                        .bind(this, { id: page.id() }, { id: section.id() })} />
                  </InternalSectionButtons>)
                }
              </InternalSection>
            )
          }
        </InternalSectionLayout>
        <InternalPageButtons>
            <InternalAddSectionButton
              addSection={this.addSection.bind(this, { id: page.id() })} />
        </InternalPageButtons>
      </div>
    );
  },
});
