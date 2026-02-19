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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43497){
var map__43498 = p__43497;
var map__43498__$1 = cljs.core.__destructure_map(map__43498);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__43506_43582 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__43507_43583 = null;
var count__43508_43584 = (0);
var i__43509_43585 = (0);
while(true){
if((i__43509_43585 < count__43508_43584)){
var vec__43541_43588 = chunk__43507_43583.cljs$core$IIndexed$_nth$arity$2(null, i__43509_43585);
var k_43589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43541_43588,(0),null);
var cb_43590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43541_43588,(1),null);
try{var G__43549_43591 = cljs.core.deref(re_frame.trace.traces);
(cb_43590.cljs$core$IFn$_invoke$arity$1 ? cb_43590.cljs$core$IFn$_invoke$arity$1(G__43549_43591) : cb_43590.call(null, G__43549_43591));
}catch (e43545){var e_43592 = e43545;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43589,"while storing",cljs.core.deref(re_frame.trace.traces),e_43592], 0));
}

var G__43593 = seq__43506_43582;
var G__43594 = chunk__43507_43583;
var G__43595 = count__43508_43584;
var G__43596 = (i__43509_43585 + (1));
seq__43506_43582 = G__43593;
chunk__43507_43583 = G__43594;
count__43508_43584 = G__43595;
i__43509_43585 = G__43596;
continue;
} else {
var temp__5804__auto___43599 = cljs.core.seq(seq__43506_43582);
if(temp__5804__auto___43599){
var seq__43506_43600__$1 = temp__5804__auto___43599;
if(cljs.core.chunked_seq_QMARK_(seq__43506_43600__$1)){
var c__5525__auto___43601 = cljs.core.chunk_first(seq__43506_43600__$1);
var G__43602 = cljs.core.chunk_rest(seq__43506_43600__$1);
var G__43603 = c__5525__auto___43601;
var G__43604 = cljs.core.count(c__5525__auto___43601);
var G__43605 = (0);
seq__43506_43582 = G__43602;
chunk__43507_43583 = G__43603;
count__43508_43584 = G__43604;
i__43509_43585 = G__43605;
continue;
} else {
var vec__43561_43606 = cljs.core.first(seq__43506_43600__$1);
var k_43607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43561_43606,(0),null);
var cb_43608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43561_43606,(1),null);
try{var G__43568_43609 = cljs.core.deref(re_frame.trace.traces);
(cb_43608.cljs$core$IFn$_invoke$arity$1 ? cb_43608.cljs$core$IFn$_invoke$arity$1(G__43568_43609) : cb_43608.call(null, G__43568_43609));
}catch (e43565){var e_43610 = e43565;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43607,"while storing",cljs.core.deref(re_frame.trace.traces),e_43610], 0));
}

var G__43611 = cljs.core.next(seq__43506_43600__$1);
var G__43612 = null;
var G__43613 = (0);
var G__43614 = (0);
seq__43506_43582 = G__43611;
chunk__43507_43583 = G__43612;
count__43508_43584 = G__43613;
i__43509_43585 = G__43614;
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
