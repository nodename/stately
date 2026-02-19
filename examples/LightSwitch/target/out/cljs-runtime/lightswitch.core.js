goog.provide('lightswitch.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof lightswitch !== 'undefined') && (typeof lightswitch.core !== 'undefined') && (typeof lightswitch.core.root !== 'undefined')){
} else {
lightswitch.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
lightswitch.core.mount_root = (function lightswitch$core$mount_root(){
return lightswitch.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightswitch.ui.app.app_screen], null)));
});
lightswitch.core.on_reload = (function lightswitch$core$on_reload(){
return lightswitch.core.mount_root();
});
lightswitch.core.init = (function lightswitch$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

lightswitch.core.mount_root();

return lightswitch.statechart.main.start_app();
});
goog.exportSymbol('lightswitch.core.init', lightswitch.core.init);

//# sourceMappingURL=lightswitch.core.js.map
