export * from './eventbus';

export function uuid() {
  let d = Date.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
}

export function isObject(x) {
  return !!x && (typeof x === 'object' || typeof x === 'function');
}

export const isArray = Array.isArray
  || ((obj) => Object.prototype.toString.call(obj) === '[object Array]');

export function toArray(what) {
  return isArray(what) ? what : [what];
}

export const isUndefined = (x) => x === undefined;

export function isFunction(x) {
  return isObject(x) && Object.prototype.toString.call(x) === '[object Function]';
}

export function isString(x) {
  return typeof x === 'string' || ((!!x && typeof x === 'object')
    && Object.prototype.toString.call(x) === '[object String]');
}

export function maybeClassName(styles, key) {
  const style = styles[key];
  if (isString(style)) {
    return style;
  }
  return undefined;
}

export function maybeStyle(styles, key) {
  const style = styles[key];
  if (isObject(style)) {
    return style;
  }
  return undefined;
}

export function autoBind(instance) {
  for (const key in instance) {  // eslint-disable-line
    if (isFunction(instance[key])) {
      instance[key] = instance[key].bind(instance); // eslint-disable-line
    }
  }
  return instance;
}

export function invariant(condition, message, ...args) {
  if (!condition) {
    let argIndex = 0;
    const error = new Error(`${message.replace(/%s/g, () => args[argIndex++])}`);
    error.name = 'Violation';
    error.framesToPop = 2;
    throw error;
  }
}

export function extendClass(parent, protoProps, staticProps) {
  let child;
  if (protoProps && hasOwnProperty.call(protoProps, 'constructor')) {
    child = protoProps.constructor;
  } else {
    child = function() { // eslint-disable-line
      return parent.apply(this, arguments); // eslint-disable-line
    };
  }
  Object.assign(child, parent, staticProps);
  child.prototype = Object.create(parent.prototype);
  if (protoProps) Object.assign(child.prototype, protoProps);
  child.prototype.constructor = child;
  child.__super__ = parent.prototype;
  return child;
}
