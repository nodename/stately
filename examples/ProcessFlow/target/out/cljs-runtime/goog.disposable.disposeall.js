goog.loadModule(function(exports) {
  function disposeAll(var_args) {
    for (let i = 0, len = arguments.length; i < len; ++i) {
      const disposable = arguments[i];
      if (goog.isArrayLike(disposable)) {
        disposeAll.apply(null, disposable);
      } else {
        dispose(disposable);
      }
    }
  }
  "use strict";
  goog.module("goog.disposeAll");
  goog.module.declareLegacyNamespace();
  const dispose = goog.require("goog.dispose");
  exports = disposeAll;
  return exports;
});

//# sourceMappingURL=goog.disposable.disposeall.js.map
