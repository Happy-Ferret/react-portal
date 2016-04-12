import React, { PropTypes } from 'react';

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
  removeWidget(widget) {
    for (const pidx in this.props.portalState.pages) { // eslint-disable-line
      const p = this.props.portalState.pages[pidx];
      for (const sidx in p.sections) { // eslint-disable-line
        const s = p.sections[sidx];
        for (const widx in s.widgets) { // eslint-disable-line
          const w = s.widgets[widx];
          if (w.id === widget.id) {
            const newWidgets = [...s.widgets];
            newWidgets.splice(widx, 1);
            const newSection = { ...s, widgets: newWidgets };
            const newSections = [...p.sections];
            newSections.splice(sidx, 1, newSection);
            const newPage = { ...p, sections: newSections };
            const newPages = [...this.props.portalState.pages];
            newPages.splice(pidx, 1, newPage);
            const newState = {
              ...this.props.portalState,
              pages: newPages,
            };
            this.props.onChange(newState);
            return;
          }
        }
      }
    }
  },
  removeSection(section) {
    for (const pidx in this.props.portalState.pages) { // eslint-disable-line
      const p = this.props.portalState.pages[pidx];
      for (const sidx in p.sections) { // eslint-disable-line
        const s = p.sections[sidx];
        if (s.id === section.id) {
          const newSections = [...p.sections];
          newSections.splice(sidx, 1);
          const newPage = { ...p, sections: newSections };
          const newPages = [...this.props.portalState.pages];
          newPages.splice(pidx, 1, newPage);
          const newState = {
            ...this.props.portalState,
            pages: newPages,
          };
          this.props.onChange(newState);
          return;
        }
      }
    }
  },
  addSection(toPage, section) {
    for (const pidx in this.props.portalState.pages) { // eslint-disable-line
      const p = this.props.portalState.pages[pidx];
      if (p.id === toPage.id) {
        const newSections = [...p.sections];
        newSections.push(section);
        const newPage = { ...p, sections: newSections };
        const newPages = [...this.props.portalState.pages];
        newPages.splice(pidx, 1, newPage);
        const newState = {
          ...this.props.portalState,
          pages: newPages,
        };
        this.props.onChange(newState);
        return;
      }
    }
  },
  addWidget(toSection, widget) {
    for (const pidx in this.props.portalState.pages) { // eslint-disable-line
      const p = this.props.portalState.pages[pidx];
      for (const sidx in p.sections) { // eslint-disable-line
        const s = p.sections[sidx];
        if (s.id === toSection.id) {
          const newWidgets = [...s.widgets];
          newWidgets.push(widget);
          const newSection = { ...s, widgets: newWidgets };
          const newSections = [...p.sections];
          newSections.splice(sidx, 1, newSection);
          const newPage = { ...p, sections: newSections };
          const newPages = [...this.props.portalState.pages];
          newPages.splice(pidx, 1, newPage);
          const newState = {
            ...this.props.portalState,
            pages: newPages,
          };
          this.props.onChange(newState);
          return;
        }
      }
    }
  },
  render() {
    // TODO protect
    const page = this.props.portalState.pages.filter(p => p.position === this.props.page)[0];
    const style = { ...defaultStyle, ...this.props.style };
    const components = { ...defaultComponents, ...this.props.components };
    // TODO addSection button this.addSection.bind(this, page);
    return (
      <div
        className={maybeClassName(style, 'Portal')}
        style={maybeStyle(style, 'Portal')}>
        <InternalSectionLayout
          className={maybeClassName(style, 'SectionLayout')}
          style={maybeStyle(style, 'SectionLayout')}
          SectionLayout={components.SectionLayout}>
          {
            page.sections.map(section =>
              <InternalSection
                key={section.id}
                id={section.id}
                position={section.position}
                className={maybeClassName(style, 'Section')}
                style={maybeStyle(style, 'Section')}
                removeSection={this.removeSection.bind(this, section)}
                addWidget={this.addWidget.bind(this, section)}
                Section={components.Section}>
                {
                  section.widgets.map(widget => {
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
                        removeWidget={this.removeWidget.bind(this, widget)}
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
      </div>
    );
  },
});
