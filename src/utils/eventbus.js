export function eventBus() {
  const listeners = [];

  function dispatch(payload) {
    listeners.forEach(l => l(payload));
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    dispatch,
    subscribe,
  };
}
