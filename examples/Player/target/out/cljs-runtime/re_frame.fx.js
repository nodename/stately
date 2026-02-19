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
var _STAR_current_trace_STAR__orig_val__63113 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__63114 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__63114);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___63468 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___63468)){
var new_db_63469 = temp__5804__auto___63468;
var fexpr__63118_63470 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__63118_63470.cljs$core$IFn$_invoke$arity$1 ? fexpr__63118_63470.cljs$core$IFn$_invoke$arity$1(new_db_63469) : fexpr__63118_63470.call(null, new_db_63469));
} else {
}

var seq__63121 = cljs.core.seq(effects_without_db);
var chunk__63122 = null;
var count__63123 = (0);
var i__63124 = (0);
while(true){
if((i__63124 < count__63123)){
var vec__63183 = chunk__63122.cljs$core$IIndexed$_nth$arity$2(null, i__63124);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63183,(1),null);
var temp__5802__auto___63471 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63471)){
var effect_fn_63473 = temp__5802__auto___63471;
(effect_fn_63473.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63473.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63473.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__63474 = seq__63121;
var G__63475 = chunk__63122;
var G__63476 = count__63123;
var G__63477 = (i__63124 + (1));
seq__63121 = G__63474;
chunk__63122 = G__63475;
count__63123 = G__63476;
i__63124 = G__63477;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63121);
if(temp__5804__auto__){
var seq__63121__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63121__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63121__$1);
var G__63479 = cljs.core.chunk_rest(seq__63121__$1);
var G__63480 = c__5525__auto__;
var G__63481 = cljs.core.count(c__5525__auto__);
var G__63482 = (0);
seq__63121 = G__63479;
chunk__63122 = G__63480;
count__63123 = G__63481;
i__63124 = G__63482;
continue;
} else {
var vec__63201 = cljs.core.first(seq__63121__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63201,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63201,(1),null);
var temp__5802__auto___63483 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63483)){
var effect_fn_63484 = temp__5802__auto___63483;
(effect_fn_63484.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63484.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63484.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__63485 = cljs.core.next(seq__63121__$1);
var G__63486 = null;
var G__63487 = (0);
var G__63488 = (0);
seq__63121 = G__63485;
chunk__63122 = G__63486;
count__63123 = G__63487;
i__63124 = G__63488;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___63489 = re_frame.interop.now();
var duration__12885__auto___63490 = (end__12884__auto___63489 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___63490,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___63489);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__63113);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___63492 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___63492)){
var new_db_63493 = temp__5804__auto___63492;
var fexpr__63215_63494 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__63215_63494.cljs$core$IFn$_invoke$arity$1 ? fexpr__63215_63494.cljs$core$IFn$_invoke$arity$1(new_db_63493) : fexpr__63215_63494.call(null, new_db_63493));
} else {
}

var seq__63220 = cljs.core.seq(effects_without_db);
var chunk__63221 = null;
var count__63222 = (0);
var i__63223 = (0);
while(true){
if((i__63223 < count__63222)){
var vec__63253 = chunk__63221.cljs$core$IIndexed$_nth$arity$2(null, i__63223);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63253,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63253,(1),null);
var temp__5802__auto___63496 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63496)){
var effect_fn_63497 = temp__5802__auto___63496;
(effect_fn_63497.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63497.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63497.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__63501 = seq__63220;
var G__63502 = chunk__63221;
var G__63503 = count__63222;
var G__63504 = (i__63223 + (1));
seq__63220 = G__63501;
chunk__63221 = G__63502;
count__63222 = G__63503;
i__63223 = G__63504;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63220);
if(temp__5804__auto__){
var seq__63220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63220__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63220__$1);
var G__63505 = cljs.core.chunk_rest(seq__63220__$1);
var G__63506 = c__5525__auto__;
var G__63507 = cljs.core.count(c__5525__auto__);
var G__63508 = (0);
seq__63220 = G__63505;
chunk__63221 = G__63506;
count__63222 = G__63507;
i__63223 = G__63508;
continue;
} else {
var vec__63261 = cljs.core.first(seq__63220__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63261,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63261,(1),null);
var temp__5802__auto___63509 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63509)){
var effect_fn_63510 = temp__5802__auto___63509;
(effect_fn_63510.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63510.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63510.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__63511 = cljs.core.next(seq__63220__$1);
var G__63512 = null;
var G__63513 = (0);
var G__63514 = (0);
seq__63220 = G__63511;
chunk__63221 = G__63512;
count__63222 = G__63513;
i__63223 = G__63514;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__63314){
var map__63315 = p__63314;
var map__63315__$1 = cljs.core.__destructure_map(map__63315);
var effect = map__63315__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63315__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63315__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__63323 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__63324 = null;
var count__63325 = (0);
var i__63326 = (0);
while(true){
if((i__63326 < count__63325)){
var effect = chunk__63324.cljs$core$IIndexed$_nth$arity$2(null, i__63326);
re_frame.fx.dispatch_later(effect);


var G__63519 = seq__63323;
var G__63520 = chunk__63324;
var G__63521 = count__63325;
var G__63522 = (i__63326 + (1));
seq__63323 = G__63519;
chunk__63324 = G__63520;
count__63325 = G__63521;
i__63326 = G__63522;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63323);
if(temp__5804__auto__){
var seq__63323__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63323__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63323__$1);
var G__63523 = cljs.core.chunk_rest(seq__63323__$1);
var G__63524 = c__5525__auto__;
var G__63525 = cljs.core.count(c__5525__auto__);
var G__63526 = (0);
seq__63323 = G__63523;
chunk__63324 = G__63524;
count__63325 = G__63525;
i__63326 = G__63526;
continue;
} else {
var effect = cljs.core.first(seq__63323__$1);
re_frame.fx.dispatch_later(effect);


var G__63529 = cljs.core.next(seq__63323__$1);
var G__63530 = null;
var G__63531 = (0);
var G__63532 = (0);
seq__63323 = G__63529;
chunk__63324 = G__63530;
count__63325 = G__63531;
i__63326 = G__63532;
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
var seq__63355 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__63356 = null;
var count__63357 = (0);
var i__63358 = (0);
while(true){
if((i__63358 < count__63357)){
var vec__63382 = chunk__63356.cljs$core$IIndexed$_nth$arity$2(null, i__63358);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63382,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___63536 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63536)){
var effect_fn_63540 = temp__5802__auto___63536;
(effect_fn_63540.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63540.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63540.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__63542 = seq__63355;
var G__63543 = chunk__63356;
var G__63544 = count__63357;
var G__63545 = (i__63358 + (1));
seq__63355 = G__63542;
chunk__63356 = G__63543;
count__63357 = G__63544;
i__63358 = G__63545;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63355);
if(temp__5804__auto__){
var seq__63355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63355__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63355__$1);
var G__63549 = cljs.core.chunk_rest(seq__63355__$1);
var G__63550 = c__5525__auto__;
var G__63551 = cljs.core.count(c__5525__auto__);
var G__63552 = (0);
seq__63355 = G__63549;
chunk__63356 = G__63550;
count__63357 = G__63551;
i__63358 = G__63552;
continue;
} else {
var vec__63389 = cljs.core.first(seq__63355__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63389,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63389,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___63553 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___63553)){
var effect_fn_63554 = temp__5802__auto___63553;
(effect_fn_63554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_63554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_63554.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__63555 = cljs.core.next(seq__63355__$1);
var G__63556 = null;
var G__63557 = (0);
var G__63558 = (0);
seq__63355 = G__63555;
chunk__63356 = G__63556;
count__63357 = G__63557;
i__63358 = G__63558;
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
var seq__63424 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__63425 = null;
var count__63426 = (0);
var i__63427 = (0);
while(true){
if((i__63427 < count__63426)){
var event = chunk__63425.cljs$core$IIndexed$_nth$arity$2(null, i__63427);
re_frame.router.dispatch(event);


var G__63559 = seq__63424;
var G__63560 = chunk__63425;
var G__63561 = count__63426;
var G__63562 = (i__63427 + (1));
seq__63424 = G__63559;
chunk__63425 = G__63560;
count__63426 = G__63561;
i__63427 = G__63562;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63424);
if(temp__5804__auto__){
var seq__63424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63424__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63424__$1);
var G__63565 = cljs.core.chunk_rest(seq__63424__$1);
var G__63566 = c__5525__auto__;
var G__63567 = cljs.core.count(c__5525__auto__);
var G__63568 = (0);
seq__63424 = G__63565;
chunk__63425 = G__63566;
count__63426 = G__63567;
i__63427 = G__63568;
continue;
} else {
var event = cljs.core.first(seq__63424__$1);
re_frame.router.dispatch(event);


var G__63571 = cljs.core.next(seq__63424__$1);
var G__63572 = null;
var G__63573 = (0);
var G__63574 = (0);
seq__63424 = G__63571;
chunk__63425 = G__63572;
count__63426 = G__63573;
i__63427 = G__63574;
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
var seq__63443 = cljs.core.seq(value);
var chunk__63444 = null;
var count__63445 = (0);
var i__63446 = (0);
while(true){
if((i__63446 < count__63445)){
var event = chunk__63444.cljs$core$IIndexed$_nth$arity$2(null, i__63446);
clear_event(event);


var G__63577 = seq__63443;
var G__63578 = chunk__63444;
var G__63579 = count__63445;
var G__63580 = (i__63446 + (1));
seq__63443 = G__63577;
chunk__63444 = G__63578;
count__63445 = G__63579;
i__63446 = G__63580;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63443);
if(temp__5804__auto__){
var seq__63443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63443__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63443__$1);
var G__63581 = cljs.core.chunk_rest(seq__63443__$1);
var G__63582 = c__5525__auto__;
var G__63583 = cljs.core.count(c__5525__auto__);
var G__63584 = (0);
seq__63443 = G__63581;
chunk__63444 = G__63582;
count__63445 = G__63583;
i__63446 = G__63584;
continue;
} else {
var event = cljs.core.first(seq__63443__$1);
clear_event(event);


var G__63587 = cljs.core.next(seq__63443__$1);
var G__63588 = null;
var G__63589 = (0);
var G__63590 = (0);
seq__63443 = G__63587;
chunk__63444 = G__63588;
count__63445 = G__63589;
i__63446 = G__63590;
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
var _STAR_current_trace_STAR__orig_val__63460 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__63461 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__63461);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___63591 = re_frame.interop.now();
var duration__12885__auto___63592 = (end__12884__auto___63591 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___63592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___63591);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__63460);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
