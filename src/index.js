import 'es6-shim';
import 'es7-shim';

export * from './api/components';

export * from './api/components/SectionLayout';
export * from './api/components/Section';
export * from './api/components/WidgetContainer';
export * from './api/components/WidgetBar';
export * from './api/components/WidgetBarInfo';
export * from './api/components/WidgetBarTitle';
export * from './api/components/WidgetBarPreferencesButton';
export * from './api/components/WidgetBarMoveButton';
export * from './api/components/WidgetBarCloseButton';
export * from './api/components/WidgetBody';

export * from './api/state/PortalState';

export * from './api/wrappers/PortalWrapper';

export * from './api/Portal';
export * from './api/Widget';

// TODO : third party class extends for WidgetEditComponent
// TODO : add section buttons (add widget, remove section)
// TODO : add resources bundles for label in portal config
// TODO : add widget not found and protect bad widget lookup
// TODO : add default preferences view in widget with JSON editor (pass prefs)
// TODO : change lifecycle methods name in WidgetDOM (widgetWillUnmount, etc ...)
// TODO : add button to add section to the current page
// TODO : propose 2 types of layout in the public API ???
// TODO : add catalog popup to add widget
// TODO : do we need to handle widget width/height ???
// TODO : pass state to immutable.js
// TODO : write readme
// TODO : write tests
// TODO : service to manipulate state easily
// TODO : function for authorization
// TODO : pass user context to widgets ???
// TODO : clean and nice default style with svg icons
// TODO : what about pluggable transition ???
