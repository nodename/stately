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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__62398){
var map__62399 = p__62398;
var map__62399__$1 = cljs.core.__destructure_map(map__62399);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__62410_62488 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__62411_62489 = null;
var count__62412_62490 = (0);
var i__62413_62491 = (0);
while(true){
if((i__62413_62491 < count__62412_62490)){
var vec__62440_62493 = chunk__62411_62489.cljs$core$IIndexed$_nth$arity$2(null, i__62413_62491);
var k_62494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62440_62493,(0),null);
var cb_62495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62440_62493,(1),null);
try{var G__62446_62497 = cljs.core.deref(re_frame.trace.traces);
(cb_62495.cljs$core$IFn$_invoke$arity$1 ? cb_62495.cljs$core$IFn$_invoke$arity$1(G__62446_62497) : cb_62495.call(null, G__62446_62497));
}catch (e62444){var e_62499 = e62444;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_62494,"while storing",cljs.core.deref(re_frame.trace.traces),e_62499], 0));
}

var G__62500 = seq__62410_62488;
var G__62501 = chunk__62411_62489;
var G__62502 = count__62412_62490;
var G__62503 = (i__62413_62491 + (1));
seq__62410_62488 = G__62500;
chunk__62411_62489 = G__62501;
count__62412_62490 = G__62502;
i__62413_62491 = G__62503;
continue;
} else {
var temp__5804__auto___62505 = cljs.core.seq(seq__62410_62488);
if(temp__5804__auto___62505){
var seq__62410_62506__$1 = temp__5804__auto___62505;
if(cljs.core.chunked_seq_QMARK_(seq__62410_62506__$1)){
var c__5525__auto___62507 = cljs.core.chunk_first(seq__62410_62506__$1);
var G__62508 = cljs.core.chunk_rest(seq__62410_62506__$1);
var G__62509 = c__5525__auto___62507;
var G__62510 = cljs.core.count(c__5525__auto___62507);
var G__62511 = (0);
seq__62410_62488 = G__62508;
chunk__62411_62489 = G__62509;
count__62412_62490 = G__62510;
i__62413_62491 = G__62511;
continue;
} else {
var vec__62448_62512 = cljs.core.first(seq__62410_62506__$1);
var k_62513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62448_62512,(0),null);
var cb_62514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62448_62512,(1),null);
try{var G__62457_62515 = cljs.core.deref(re_frame.trace.traces);
(cb_62514.cljs$core$IFn$_invoke$arity$1 ? cb_62514.cljs$core$IFn$_invoke$arity$1(G__62457_62515) : cb_62514.call(null, G__62457_62515));
}catch (e62452){var e_62517 = e62452;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_62513,"while storing",cljs.core.deref(re_frame.trace.traces),e_62517], 0));
}

var G__62518 = cljs.core.next(seq__62410_62506__$1);
var G__62519 = null;
var G__62520 = (0);
var G__62521 = (0);
seq__62410_62488 = G__62518;
chunk__62411_62489 = G__62519;
count__62412_62490 = G__62520;
i__62413_62491 = G__62521;
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
