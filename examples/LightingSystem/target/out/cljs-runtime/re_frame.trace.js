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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__53184){
var map__53185 = p__53184;
var map__53185__$1 = cljs.core.__destructure_map(map__53185);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__53195_53271 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__53196_53272 = null;
var count__53197_53273 = (0);
var i__53198_53274 = (0);
while(true){
if((i__53198_53274 < count__53197_53273)){
var vec__53229_53275 = chunk__53196_53272.cljs$core$IIndexed$_nth$arity$2(null, i__53198_53274);
var k_53276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53229_53275,(0),null);
var cb_53277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53229_53275,(1),null);
try{var G__53237_53278 = cljs.core.deref(re_frame.trace.traces);
(cb_53277.cljs$core$IFn$_invoke$arity$1 ? cb_53277.cljs$core$IFn$_invoke$arity$1(G__53237_53278) : cb_53277.call(null, G__53237_53278));
}catch (e53233){var e_53281 = e53233;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53276,"while storing",cljs.core.deref(re_frame.trace.traces),e_53281], 0));
}

var G__53284 = seq__53195_53271;
var G__53285 = chunk__53196_53272;
var G__53286 = count__53197_53273;
var G__53287 = (i__53198_53274 + (1));
seq__53195_53271 = G__53284;
chunk__53196_53272 = G__53285;
count__53197_53273 = G__53286;
i__53198_53274 = G__53287;
continue;
} else {
var temp__5804__auto___53288 = cljs.core.seq(seq__53195_53271);
if(temp__5804__auto___53288){
var seq__53195_53289__$1 = temp__5804__auto___53288;
if(cljs.core.chunked_seq_QMARK_(seq__53195_53289__$1)){
var c__5525__auto___53290 = cljs.core.chunk_first(seq__53195_53289__$1);
var G__53291 = cljs.core.chunk_rest(seq__53195_53289__$1);
var G__53292 = c__5525__auto___53290;
var G__53293 = cljs.core.count(c__5525__auto___53290);
var G__53294 = (0);
seq__53195_53271 = G__53291;
chunk__53196_53272 = G__53292;
count__53197_53273 = G__53293;
i__53198_53274 = G__53294;
continue;
} else {
var vec__53243_53295 = cljs.core.first(seq__53195_53289__$1);
var k_53296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243_53295,(0),null);
var cb_53297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53243_53295,(1),null);
try{var G__53247_53298 = cljs.core.deref(re_frame.trace.traces);
(cb_53297.cljs$core$IFn$_invoke$arity$1 ? cb_53297.cljs$core$IFn$_invoke$arity$1(G__53247_53298) : cb_53297.call(null, G__53247_53298));
}catch (e53246){var e_53299 = e53246;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53296,"while storing",cljs.core.deref(re_frame.trace.traces),e_53299], 0));
}

var G__53300 = cljs.core.next(seq__53195_53289__$1);
var G__53301 = null;
var G__53302 = (0);
var G__53303 = (0);
seq__53195_53271 = G__53300;
chunk__53196_53272 = G__53301;
count__53197_53273 = G__53302;
i__53198_53274 = G__53303;
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
