declare global {
  interface Window {
    setImmediate: (fn: (...args: unknown[]) => void, ...args: unknown[]) => number;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const global: any;
}

if (typeof window.setImmediate === 'undefined') {
  window.setImmediate = (fn: (...args: unknown[]) => void, ...args: unknown[]) =>
    window.setTimeout(fn, 0, ...args);
}

if (typeof global !== 'undefined' && typeof global.setImmediate === 'undefined') {
  global.setImmediate = window.setImmediate;
}
