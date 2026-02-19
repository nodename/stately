goog.provide('processflow.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof processflow !== 'undefined') && (typeof processflow.core !== 'undefined') && (typeof processflow.core.root !== 'undefined')){
} else {
processflow.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
processflow.core.mount_root = (function processflow$core$mount_root(){
return processflow.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [processflow.ui.app.app_screen], null)));
});
processflow.core.on_reload = (function processflow$core$on_reload(){
return processflow.core.mount_root();
});
processflow.core.init = (function processflow$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

processflow.core.mount_root();

return processflow.statechart.main.start_app();
});
goog.exportSymbol('processflow.core.init', processflow.core.init);

//# sourceMappingURL=processflow.core.js.map
