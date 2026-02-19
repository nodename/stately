goog.provide('player_web.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
cljs.core.enable_console_print_BANG_();
if((typeof player_web !== 'undefined') && (typeof player_web.core !== 'undefined') && (typeof player_web.core.root !== 'undefined')){
} else {
player_web.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
player_web.core.mount_root = (function player_web$core$mount_root(){
return player_web.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_web.ui.app.app_screen], null)));
});
player_web.core.on_reload = (function player_web$core$on_reload(){
return player_web.core.mount_root();
});
player_web.core.init = (function player_web$core$init(){
nodename.stately.comms.use_re_frame_BANG_(true);

player_web.core.mount_root();

return player_web.statechart.main.start_app();
});
goog.exportSymbol('player_web.core.init', player_web.core.init);

//# sourceMappingURL=player_web.core.js.map
