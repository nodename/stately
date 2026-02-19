goog.provide('lightswitch_web.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof lightswitch_web !== 'undefined') && (typeof lightswitch_web.core !== 'undefined') && (typeof lightswitch_web.core.root !== 'undefined')){
} else {
lightswitch_web.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
lightswitch_web.core.mount_root = (function lightswitch_web$core$mount_root(){
return lightswitch_web.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightswitch_web.ui.app.app_screen], null)));
});
lightswitch_web.core.on_reload = (function lightswitch_web$core$on_reload(){
return lightswitch_web.core.mount_root();
});
lightswitch_web.core.init = (function lightswitch_web$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

lightswitch_web.core.mount_root();

return lightswitch_web.statechart.main.start_app();
});
goog.exportSymbol('lightswitch_web.core.init', lightswitch_web.core.init);

//# sourceMappingURL=lightswitch_web.core.js.map
