goog.provide('nodename.stately.communications.impl.handlers');
/**
 * Given a vector of middleware, filter out any nils, and use "comp" to compose the elements.
 *   v can have nested vectors, and will be flattened before "comp" is applied.
 *   For convienience, if v is a function (assumed to be middleware already), just return it.
 *   Filtering out nils allows us to create Middleware conditionally like this:
 *   (comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil
 *   
 */
nodename.stately.communications.impl.handlers.comp_middleware = (function nodename$stately$communications$impl$handlers$comp_middleware(v){
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
if(cljs.core.coll_QMARK_(v)){
var v__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(v));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,v__$1);
} else {
return nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["comp-middleware expects a vector, got: ",v], 0));

}
}
});
nodename.stately.communications.impl.handlers.id__GT_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
nodename.stately.communications.impl.handlers.lookup_handler = (function nodename$stately$communications$impl$handlers$lookup_handler(event_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodename.stately.communications.impl.handlers.id__GT_fn),event_id);
});
/**
 * Unregister all event handlers
 */
nodename.stately.communications.impl.handlers.clear_handlers_BANG_ = (function nodename$stately$communications$impl$handlers$clear_handlers_BANG_(){
return cljs.core.reset_BANG_(nodename.stately.communications.impl.handlers.id__GT_fn,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * register a handler for an event.
 *   This is low level and it is expected that "register-handler" would
 *   generally be used.
 */
nodename.stately.communications.impl.handlers.register_base = (function nodename$stately$communications$impl$handlers$register_base(var_args){
var G__62138 = arguments.length;
switch (G__62138) {
case 2:
return nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_(cljs.core.deref(nodename.stately.communications.impl.handlers.id__GT_fn),event_id)){
nodename.stately.communications.impl.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["overwriting an event-handler for: ",event_id], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodename.stately.communications.impl.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
}));

(nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware,handler_fn){
var mid_ware = nodename.stately.communications.impl.handlers.comp_middleware(middleware);
var midware_PLUS_hfn = (mid_ware.cljs$core$IFn$_invoke$arity$1 ? mid_ware.cljs$core$IFn$_invoke$arity$1(handler_fn) : mid_ware.call(null, handler_fn));
return nodename.stately.communications.impl.handlers.register_base.cljs$core$IFn$_invoke$arity$2(event_id,midware_PLUS_hfn);
}));

(nodename.stately.communications.impl.handlers.register_base.cljs$lang$maxFixedArity = 3);

nodename.stately.communications.impl.handlers._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the handler, then call it.
 *   By default, handlers are not assumed to be pure. They are called with
 *   two paramters:
 *  - the `app-db` atom
 *  - the event vector
 *   The handler is assumed to side-effect on `app-db` - the return value is ignored.
 *   To write a pure handler, use the "pure" middleware when registering the handler.
 */
nodename.stately.communications.impl.handlers.handle = (function nodename$stately$communications$impl$handlers$handle(event_v){
var event_id = cljs.core.first(event_v);
var handler_fn = nodename.stately.communications.impl.handlers.lookup_handler(event_id);
if((handler_fn == null)){
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no event handler registered for: \"",event_id,"\". Ignoring."], 0));
} else {
if(cljs.core.truth_(nodename.stately.communications.impl.handlers._STAR_handling_STAR_)){
return nodename.stately.communications.impl.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while handling \"",nodename.stately.communications.impl.handlers._STAR_handling_STAR_,"\"  dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync in an event handler."], 0));
} else {
var _STAR_handling_STAR__orig_val__62145 = nodename.stately.communications.impl.handlers._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__62146 = event_v;
(nodename.stately.communications.impl.handlers._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__62146);

try{return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(nodename.stately.communications.impl.db.app_db,event_v) : handler_fn.call(null, nodename.stately.communications.impl.db.app_db,event_v));
}finally {(nodename.stately.communications.impl.handlers._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__62145);
}}
}
});

//# sourceMappingURL=nodename.stately.communications.impl.handlers.js.map
