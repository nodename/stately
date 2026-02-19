goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35171 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35172 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35172);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___35495 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___35495)){
var new_db_35496 = temp__5804__auto___35495;
var fexpr__35189_35497 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35189_35497.cljs$core$IFn$_invoke$arity$1 ? fexpr__35189_35497.cljs$core$IFn$_invoke$arity$1(new_db_35496) : fexpr__35189_35497.call(null, new_db_35496));
} else {
}

var seq__35191 = cljs.core.seq(effects_without_db);
var chunk__35192 = null;
var count__35193 = (0);
var i__35194 = (0);
while(true){
if((i__35194 < count__35193)){
var vec__35225 = chunk__35192.cljs$core$IIndexed$_nth$arity$2(null, i__35194);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(1),null);
var temp__5802__auto___35501 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35501)){
var effect_fn_35502 = temp__5802__auto___35501;
(effect_fn_35502.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35502.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35502.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__35505 = seq__35191;
var G__35506 = chunk__35192;
var G__35507 = count__35193;
var G__35508 = (i__35194 + (1));
seq__35191 = G__35505;
chunk__35192 = G__35506;
count__35193 = G__35507;
i__35194 = G__35508;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35191);
if(temp__5804__auto__){
var seq__35191__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35191__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35191__$1);
var G__35509 = cljs.core.chunk_rest(seq__35191__$1);
var G__35510 = c__5525__auto__;
var G__35511 = cljs.core.count(c__5525__auto__);
var G__35512 = (0);
seq__35191 = G__35509;
chunk__35192 = G__35510;
count__35193 = G__35511;
i__35194 = G__35512;
continue;
} else {
var vec__35232 = cljs.core.first(seq__35191__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35232,(1),null);
var temp__5802__auto___35513 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35513)){
var effect_fn_35515 = temp__5802__auto___35513;
(effect_fn_35515.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35515.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35515.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__35516 = cljs.core.next(seq__35191__$1);
var G__35517 = null;
var G__35518 = (0);
var G__35519 = (0);
seq__35191 = G__35516;
chunk__35192 = G__35517;
count__35193 = G__35518;
i__35194 = G__35519;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___35520 = re_frame.interop.now();
var duration__12885__auto___35521 = (end__12884__auto___35520 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___35521,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___35520);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35171);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___35522 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___35522)){
var new_db_35523 = temp__5804__auto___35522;
var fexpr__35256_35524 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35256_35524.cljs$core$IFn$_invoke$arity$1 ? fexpr__35256_35524.cljs$core$IFn$_invoke$arity$1(new_db_35523) : fexpr__35256_35524.call(null, new_db_35523));
} else {
}

var seq__35269 = cljs.core.seq(effects_without_db);
var chunk__35272 = null;
var count__35273 = (0);
var i__35274 = (0);
while(true){
if((i__35274 < count__35273)){
var vec__35302 = chunk__35272.cljs$core$IIndexed$_nth$arity$2(null, i__35274);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(1),null);
var temp__5802__auto___35527 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35527)){
var effect_fn_35528 = temp__5802__auto___35527;
(effect_fn_35528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35528.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__35530 = seq__35269;
var G__35531 = chunk__35272;
var G__35532 = count__35273;
var G__35533 = (i__35274 + (1));
seq__35269 = G__35530;
chunk__35272 = G__35531;
count__35273 = G__35532;
i__35274 = G__35533;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35269);
if(temp__5804__auto__){
var seq__35269__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35269__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35269__$1);
var G__35535 = cljs.core.chunk_rest(seq__35269__$1);
var G__35536 = c__5525__auto__;
var G__35537 = cljs.core.count(c__5525__auto__);
var G__35538 = (0);
seq__35269 = G__35535;
chunk__35272 = G__35536;
count__35273 = G__35537;
i__35274 = G__35538;
continue;
} else {
var vec__35316 = cljs.core.first(seq__35269__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(1),null);
var temp__5802__auto___35539 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35539)){
var effect_fn_35540 = temp__5802__auto___35539;
(effect_fn_35540.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35540.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35540.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__35544 = cljs.core.next(seq__35269__$1);
var G__35545 = null;
var G__35546 = (0);
var G__35547 = (0);
seq__35269 = G__35544;
chunk__35272 = G__35545;
count__35273 = G__35546;
i__35274 = G__35547;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35335){
var map__35336 = p__35335;
var map__35336__$1 = cljs.core.__destructure_map(map__35336);
var effect = map__35336__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35336__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35336__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35343 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35344 = null;
var count__35345 = (0);
var i__35346 = (0);
while(true){
if((i__35346 < count__35345)){
var effect = chunk__35344.cljs$core$IIndexed$_nth$arity$2(null, i__35346);
re_frame.fx.dispatch_later(effect);


var G__35549 = seq__35343;
var G__35550 = chunk__35344;
var G__35551 = count__35345;
var G__35552 = (i__35346 + (1));
seq__35343 = G__35549;
chunk__35344 = G__35550;
count__35345 = G__35551;
i__35346 = G__35552;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35343);
if(temp__5804__auto__){
var seq__35343__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35343__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35343__$1);
var G__35557 = cljs.core.chunk_rest(seq__35343__$1);
var G__35558 = c__5525__auto__;
var G__35559 = cljs.core.count(c__5525__auto__);
var G__35560 = (0);
seq__35343 = G__35557;
chunk__35344 = G__35558;
count__35345 = G__35559;
i__35346 = G__35560;
continue;
} else {
var effect = cljs.core.first(seq__35343__$1);
re_frame.fx.dispatch_later(effect);


var G__35561 = cljs.core.next(seq__35343__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35343 = G__35561;
chunk__35344 = G__35562;
count__35345 = G__35563;
i__35346 = G__35564;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35357 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35358 = null;
var count__35359 = (0);
var i__35360 = (0);
while(true){
if((i__35360 < count__35359)){
var vec__35388 = chunk__35358.cljs$core$IIndexed$_nth$arity$2(null, i__35360);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___35565 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35565)){
var effect_fn_35566 = temp__5802__auto___35565;
(effect_fn_35566.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35566.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35566.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35567 = seq__35357;
var G__35568 = chunk__35358;
var G__35569 = count__35359;
var G__35570 = (i__35360 + (1));
seq__35357 = G__35567;
chunk__35358 = G__35568;
count__35359 = G__35569;
i__35360 = G__35570;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35357);
if(temp__5804__auto__){
var seq__35357__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35357__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35357__$1);
var G__35571 = cljs.core.chunk_rest(seq__35357__$1);
var G__35572 = c__5525__auto__;
var G__35573 = cljs.core.count(c__5525__auto__);
var G__35574 = (0);
seq__35357 = G__35571;
chunk__35358 = G__35572;
count__35359 = G__35573;
i__35360 = G__35574;
continue;
} else {
var vec__35428 = cljs.core.first(seq__35357__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___35577 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___35577)){
var effect_fn_35578 = temp__5802__auto___35577;
(effect_fn_35578.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35578.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35578.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35580 = cljs.core.next(seq__35357__$1);
var G__35581 = null;
var G__35582 = (0);
var G__35583 = (0);
seq__35357 = G__35580;
chunk__35358 = G__35581;
count__35359 = G__35582;
i__35360 = G__35583;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35449 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35450 = null;
var count__35451 = (0);
var i__35452 = (0);
while(true){
if((i__35452 < count__35451)){
var event = chunk__35450.cljs$core$IIndexed$_nth$arity$2(null, i__35452);
re_frame.router.dispatch(event);


var G__35587 = seq__35449;
var G__35588 = chunk__35450;
var G__35589 = count__35451;
var G__35590 = (i__35452 + (1));
seq__35449 = G__35587;
chunk__35450 = G__35588;
count__35451 = G__35589;
i__35452 = G__35590;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35449);
if(temp__5804__auto__){
var seq__35449__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35449__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35449__$1);
var G__35592 = cljs.core.chunk_rest(seq__35449__$1);
var G__35593 = c__5525__auto__;
var G__35594 = cljs.core.count(c__5525__auto__);
var G__35595 = (0);
seq__35449 = G__35592;
chunk__35450 = G__35593;
count__35451 = G__35594;
i__35452 = G__35595;
continue;
} else {
var event = cljs.core.first(seq__35449__$1);
re_frame.router.dispatch(event);


var G__35596 = cljs.core.next(seq__35449__$1);
var G__35597 = null;
var G__35598 = (0);
var G__35599 = (0);
seq__35449 = G__35596;
chunk__35450 = G__35597;
count__35451 = G__35598;
i__35452 = G__35599;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35462 = cljs.core.seq(value);
var chunk__35463 = null;
var count__35464 = (0);
var i__35465 = (0);
while(true){
if((i__35465 < count__35464)){
var event = chunk__35463.cljs$core$IIndexed$_nth$arity$2(null, i__35465);
clear_event(event);


var G__35602 = seq__35462;
var G__35603 = chunk__35463;
var G__35604 = count__35464;
var G__35605 = (i__35465 + (1));
seq__35462 = G__35602;
chunk__35463 = G__35603;
count__35464 = G__35604;
i__35465 = G__35605;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35462);
if(temp__5804__auto__){
var seq__35462__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35462__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35462__$1);
var G__35607 = cljs.core.chunk_rest(seq__35462__$1);
var G__35608 = c__5525__auto__;
var G__35609 = cljs.core.count(c__5525__auto__);
var G__35610 = (0);
seq__35462 = G__35607;
chunk__35463 = G__35608;
count__35464 = G__35609;
i__35465 = G__35610;
continue;
} else {
var event = cljs.core.first(seq__35462__$1);
clear_event(event);


var G__35613 = cljs.core.next(seq__35462__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__35462 = G__35613;
chunk__35463 = G__35614;
count__35464 = G__35615;
i__35465 = G__35616;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35478 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35479 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35479);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___35624 = re_frame.interop.now();
var duration__12885__auto___35625 = (end__12884__auto___35624 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___35625,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___35624);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35478);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
