goog.provide('player.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof player !== 'undefined') && (typeof player.core !== 'undefined') && (typeof player.core.root !== 'undefined')){
} else {
player.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
player.core.mount_root = (function player$core$mount_root(){
return player.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player.ui.app.app_screen], null)));
});
player.core.on_reload = (function player$core$on_reload(){
return player.core.mount_root();
});
player.core.init = (function player$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

player.core.mount_root();

return player.statechart.main.start_app();
});
goog.exportSymbol('player.core.init', player.core.init);

//# sourceMappingURL=player.core.js.map
