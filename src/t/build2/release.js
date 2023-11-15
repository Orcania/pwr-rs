"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memory = exports.fib = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function instantiate(module, imports = {}) {
  const {
    exports
  } = await WebAssembly.instantiate(module, imports);
  return exports;
}
const {
  memory,
  fib
} = await (async url => instantiate(await (async () => {
  try {
    return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url));
  } catch {
    return globalThis.WebAssembly.compile(await (await Promise.resolve().then(() => _interopRequireWildcard(require("node:fs/promises")))).readFile(url));
  }
})(), {}))(new URL("release.wasm", import.meta.url));
exports.fib = fib;
exports.memory = memory;