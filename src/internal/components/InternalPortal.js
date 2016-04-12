import React, { PropTypes } from 'react';
import Immutable from 'immutable';

import { InternalSectionLayout } from './InternalSectionLayout';
import { InternalSection } from './InternalSection';
import { InternalWidgetContainer } from './InternalWidgetContainer';
import { VoidWidget } from './VoidWidget';

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
        store: this.store,
        components: {
          ...defaultComponents,
          ...this.props.components,
        },
        style: {
          ...defaultStyle,
          ...this.props.style,
        },
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
    const page = this.props.portalState.getPageAtPosition(this.props.page); // TODO protect
    const style = { ...defaultStyle, ...this.props.style };
    const components = { ...defaultComponents, ...this.props.components };
    // TODO addSection buttons
    return (
      <div
        className={maybeClassName(style, 'Portal')}
        style={maybeStyle(style, 'Portal')}>
        <InternalSectionLayout
          className={maybeClassName(style, 'SectionLayout')}
          style={maybeStyle(style, 'SectionLayout')}
          SectionLayout={components.SectionLayout}>
          {
            page.sections().map(section =>
              <InternalSection
                key={section.id()}
                id={section.id()}
                position={section.position()}
                className={maybeClassName(style, 'Section')}
                style={maybeStyle(style, 'Section')}
                removeSection={this.removeSection
                  .bind(this, { id: page.id() }, { id: section.id() })}
                addWidget={this.addWidget
                  .bind(this, { id: page.id() }, { id: section.id() })}
                Section={components.Section}>
                {
                  section.widgets().map(immutableWidget => {
                    const widget = immutableWidget.toJS();
                    const modeView = isString(widget.widget) ? widget.widget : widget.widget.view;
                    const modeEdit = isString(widget.widget) ? widget.widget : widget.widget.edit;
                    const WidgetViewComponent =
                      this.props.widgetsCatalog[modeView] || VoidWidget;
                    const WidgetEditComponent =
                      this.props.widgetsCatalog[modeEdit] || VoidWidget;
                    return (
                      <InternalWidgetContainer
                        {...widget}
                        key={widget.id}
                        className={maybeClassName(style, 'WidgetContainer')}
                        components={components}
                        style={maybeStyle(style, 'WidgetContainer')}
                        globalStyle={style}
                        removeWidget={this.removeWidget
                          .bind(this, { id: page.id() }, { id: section.id() }, widget)}
                        WidgetEditComponent={WidgetEditComponent}
                        WidgetViewComponent={WidgetViewComponent}
                        Widget={components.Widget} />
                    );
                  })
                }
              </InternalSection>
            )
          }
        </InternalSectionLayout>
        <button
          type="button"
          onClick={this.addSection.bind(this, { id: page.id() })}>
            Add section
        </button>
      </div>
    );
  },
});
