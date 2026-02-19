goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34179){
var map__34181 = p__34179;
var map__34181__$1 = cljs.core.__destructure_map(map__34181);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34181__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34181__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34181__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34181__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__34190_34244 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__34191_34245 = null;
var count__34192_34246 = (0);
var i__34193_34247 = (0);
while(true){
if((i__34193_34247 < count__34192_34246)){
var vec__34212_34250 = chunk__34191_34245.cljs$core$IIndexed$_nth$arity$2(null, i__34193_34247);
var k_34251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212_34250,(0),null);
var cb_34252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34212_34250,(1),null);
try{var G__34217_34255 = cljs.core.deref(re_frame.trace.traces);
(cb_34252.cljs$core$IFn$_invoke$arity$1 ? cb_34252.cljs$core$IFn$_invoke$arity$1(G__34217_34255) : cb_34252.call(null, G__34217_34255));
}catch (e34216){var e_34256 = e34216;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34251,"while storing",cljs.core.deref(re_frame.trace.traces),e_34256], 0));
}

var G__34257 = seq__34190_34244;
var G__34258 = chunk__34191_34245;
var G__34259 = count__34192_34246;
var G__34260 = (i__34193_34247 + (1));
seq__34190_34244 = G__34257;
chunk__34191_34245 = G__34258;
count__34192_34246 = G__34259;
i__34193_34247 = G__34260;
continue;
} else {
var temp__5804__auto___34262 = cljs.core.seq(seq__34190_34244);
if(temp__5804__auto___34262){
var seq__34190_34263__$1 = temp__5804__auto___34262;
if(cljs.core.chunked_seq_QMARK_(seq__34190_34263__$1)){
var c__5525__auto___34264 = cljs.core.chunk_first(seq__34190_34263__$1);
var G__34265 = cljs.core.chunk_rest(seq__34190_34263__$1);
var G__34266 = c__5525__auto___34264;
var G__34267 = cljs.core.count(c__5525__auto___34264);
var G__34268 = (0);
seq__34190_34244 = G__34265;
chunk__34191_34245 = G__34266;
count__34192_34246 = G__34267;
i__34193_34247 = G__34268;
continue;
} else {
var vec__34220_34269 = cljs.core.first(seq__34190_34263__$1);
var k_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34220_34269,(0),null);
var cb_34271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34220_34269,(1),null);
try{var G__34224_34276 = cljs.core.deref(re_frame.trace.traces);
(cb_34271.cljs$core$IFn$_invoke$arity$1 ? cb_34271.cljs$core$IFn$_invoke$arity$1(G__34224_34276) : cb_34271.call(null, G__34224_34276));
}catch (e34223){var e_34277 = e34223;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34270,"while storing",cljs.core.deref(re_frame.trace.traces),e_34277], 0));
}

var G__34278 = cljs.core.next(seq__34190_34263__$1);
var G__34279 = null;
var G__34280 = (0);
var G__34281 = (0);
seq__34190_34244 = G__34278;
chunk__34191_34245 = G__34279;
count__34192_34246 = G__34280;
i__34193_34247 = G__34281;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
