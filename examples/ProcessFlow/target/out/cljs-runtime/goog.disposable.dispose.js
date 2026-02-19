goog.loadModule(function(exports) {
  function dispose(obj) {
    if (obj && typeof obj.dispose == "function") {
      obj.dispose();
    }
  }
  "use strict";
  goog.module("goog.dispose");
  goog.module.declareLegacyNamespace();
  exports = dispose;
  return exports;
});

//# sourceMappingURL=goog.disposable.dispose.js.map
