goog.provide('processflow_web.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof processflow_web !== 'undefined') && (typeof processflow_web.core !== 'undefined') && (typeof processflow_web.core.root !== 'undefined')){
} else {
processflow_web.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
processflow_web.core.mount_root = (function processflow_web$core$mount_root(){
return processflow_web.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [processflow_web.ui.app.app_screen], null)));
});
processflow_web.core.on_reload = (function processflow_web$core$on_reload(){
return processflow_web.core.mount_root();
});
processflow_web.core.init = (function processflow_web$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

processflow_web.core.mount_root();

return processflow_web.statechart.main.start_app();
});
goog.exportSymbol('processflow_web.core.init', processflow_web.core.init);

//# sourceMappingURL=processflow_web.core.js.map
