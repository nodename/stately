goog.provide('lightingsystem.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof lightingsystem !== 'undefined') && (typeof lightingsystem.core !== 'undefined') && (typeof lightingsystem.core.root !== 'undefined')){
} else {
lightingsystem.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
lightingsystem.core.mount_root = (function lightingsystem$core$mount_root(){
return lightingsystem.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lightingsystem.ui.app.app_screen], null)));
});
lightingsystem.core.on_reload = (function lightingsystem$core$on_reload(){
return lightingsystem.core.mount_root();
});
lightingsystem.core.init = (function lightingsystem$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

lightingsystem.core.mount_root();

return lightingsystem.statechart.main.start_app();
});
goog.exportSymbol('lightingsystem.core.init', lightingsystem.core.init);

//# sourceMappingURL=lightingsystem.core.js.map
