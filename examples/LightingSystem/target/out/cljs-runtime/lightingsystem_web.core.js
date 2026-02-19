goog.provide('lightingsystem_web.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof lightingsystem_web !== 'undefined') && (typeof lightingsystem_web.core !== 'undefined') && (typeof lightingsystem_web.core.root !== 'undefined')){
} else {
lightingsystem_web.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
lightingsystem_web.core.mount_root = (function lightingsystem_web$core$mount_root(){
return lightingsystem_web.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem_web.ui.app.app_screen], null)));
});
lightingsystem_web.core.on_reload = (function lightingsystem_web$core$on_reload(){
return lightingsystem_web.core.mount_root();
});
lightingsystem_web.core.init = (function lightingsystem_web$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

lightingsystem_web.core.mount_root();

return lightingsystem_web.statechart.main.start_app();
});
goog.exportSymbol('lightingsystem_web.core.init', lightingsystem_web.core.init);

//# sourceMappingURL=lightingsystem_web.core.js.map
