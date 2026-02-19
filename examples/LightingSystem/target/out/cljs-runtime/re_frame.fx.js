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
var _STAR_current_trace_STAR__orig_val__54057 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__54058 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__54058);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___54368 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___54368)){
var new_db_54369 = temp__5804__auto___54368;
var fexpr__54063_54370 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__54063_54370.cljs$core$IFn$_invoke$arity$1 ? fexpr__54063_54370.cljs$core$IFn$_invoke$arity$1(new_db_54369) : fexpr__54063_54370.call(null, new_db_54369));
} else {
}

var seq__54064 = cljs.core.seq(effects_without_db);
var chunk__54065 = null;
var count__54066 = (0);
var i__54067 = (0);
while(true){
if((i__54067 < count__54066)){
var vec__54085 = chunk__54065.cljs$core$IIndexed$_nth$arity$2(null, i__54067);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54085,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54085,(1),null);
var temp__5802__auto___54373 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54373)){
var effect_fn_54374 = temp__5802__auto___54373;
(effect_fn_54374.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54374.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54374.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__54375 = seq__54064;
var G__54376 = chunk__54065;
var G__54377 = count__54066;
var G__54378 = (i__54067 + (1));
seq__54064 = G__54375;
chunk__54065 = G__54376;
count__54066 = G__54377;
i__54067 = G__54378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54064);
if(temp__5804__auto__){
var seq__54064__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54064__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54064__$1);
var G__54380 = cljs.core.chunk_rest(seq__54064__$1);
var G__54381 = c__5525__auto__;
var G__54382 = cljs.core.count(c__5525__auto__);
var G__54383 = (0);
seq__54064 = G__54380;
chunk__54065 = G__54381;
count__54066 = G__54382;
i__54067 = G__54383;
continue;
} else {
var vec__54104 = cljs.core.first(seq__54064__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54104,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54104,(1),null);
var temp__5802__auto___54384 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54384)){
var effect_fn_54388 = temp__5802__auto___54384;
(effect_fn_54388.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54388.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54388.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__54391 = cljs.core.next(seq__54064__$1);
var G__54392 = null;
var G__54393 = (0);
var G__54394 = (0);
seq__54064 = G__54391;
chunk__54065 = G__54392;
count__54066 = G__54393;
i__54067 = G__54394;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___54395 = re_frame.interop.now();
var duration__12885__auto___54396 = (end__12884__auto___54395 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___54396,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___54395);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__54057);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___54398 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___54398)){
var new_db_54399 = temp__5804__auto___54398;
var fexpr__54156_54400 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__54156_54400.cljs$core$IFn$_invoke$arity$1 ? fexpr__54156_54400.cljs$core$IFn$_invoke$arity$1(new_db_54399) : fexpr__54156_54400.call(null, new_db_54399));
} else {
}

var seq__54160 = cljs.core.seq(effects_without_db);
var chunk__54161 = null;
var count__54162 = (0);
var i__54163 = (0);
while(true){
if((i__54163 < count__54162)){
var vec__54188 = chunk__54161.cljs$core$IIndexed$_nth$arity$2(null, i__54163);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54188,(1),null);
var temp__5802__auto___54402 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54402)){
var effect_fn_54403 = temp__5802__auto___54402;
(effect_fn_54403.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54403.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54403.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__54405 = seq__54160;
var G__54406 = chunk__54161;
var G__54407 = count__54162;
var G__54408 = (i__54163 + (1));
seq__54160 = G__54405;
chunk__54161 = G__54406;
count__54162 = G__54407;
i__54163 = G__54408;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54160);
if(temp__5804__auto__){
var seq__54160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54160__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54160__$1);
var G__54411 = cljs.core.chunk_rest(seq__54160__$1);
var G__54412 = c__5525__auto__;
var G__54413 = cljs.core.count(c__5525__auto__);
var G__54414 = (0);
seq__54160 = G__54411;
chunk__54161 = G__54412;
count__54162 = G__54413;
i__54163 = G__54414;
continue;
} else {
var vec__54199 = cljs.core.first(seq__54160__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54199,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54199,(1),null);
var temp__5802__auto___54419 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54419)){
var effect_fn_54421 = temp__5802__auto___54419;
(effect_fn_54421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54421.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__54422 = cljs.core.next(seq__54160__$1);
var G__54423 = null;
var G__54424 = (0);
var G__54425 = (0);
seq__54160 = G__54422;
chunk__54161 = G__54423;
count__54162 = G__54424;
i__54163 = G__54425;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__54206){
var map__54208 = p__54206;
var map__54208__$1 = cljs.core.__destructure_map(map__54208);
var effect = map__54208__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54208__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54208__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__54211 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54212 = null;
var count__54213 = (0);
var i__54214 = (0);
while(true){
if((i__54214 < count__54213)){
var effect = chunk__54212.cljs$core$IIndexed$_nth$arity$2(null, i__54214);
re_frame.fx.dispatch_later(effect);


var G__54434 = seq__54211;
var G__54435 = chunk__54212;
var G__54436 = count__54213;
var G__54437 = (i__54214 + (1));
seq__54211 = G__54434;
chunk__54212 = G__54435;
count__54213 = G__54436;
i__54214 = G__54437;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54211);
if(temp__5804__auto__){
var seq__54211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54211__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54211__$1);
var G__54439 = cljs.core.chunk_rest(seq__54211__$1);
var G__54440 = c__5525__auto__;
var G__54441 = cljs.core.count(c__5525__auto__);
var G__54442 = (0);
seq__54211 = G__54439;
chunk__54212 = G__54440;
count__54213 = G__54441;
i__54214 = G__54442;
continue;
} else {
var effect = cljs.core.first(seq__54211__$1);
re_frame.fx.dispatch_later(effect);


var G__54443 = cljs.core.next(seq__54211__$1);
var G__54444 = null;
var G__54445 = (0);
var G__54446 = (0);
seq__54211 = G__54443;
chunk__54212 = G__54444;
count__54213 = G__54445;
i__54214 = G__54446;
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
var seq__54238 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__54239 = null;
var count__54240 = (0);
var i__54241 = (0);
while(true){
if((i__54241 < count__54240)){
var vec__54260 = chunk__54239.cljs$core$IIndexed$_nth$arity$2(null, i__54241);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54260,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54260,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___54450 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54450)){
var effect_fn_54451 = temp__5802__auto___54450;
(effect_fn_54451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54451.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__54453 = seq__54238;
var G__54454 = chunk__54239;
var G__54455 = count__54240;
var G__54456 = (i__54241 + (1));
seq__54238 = G__54453;
chunk__54239 = G__54454;
count__54240 = G__54455;
i__54241 = G__54456;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54238);
if(temp__5804__auto__){
var seq__54238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54238__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54238__$1);
var G__54457 = cljs.core.chunk_rest(seq__54238__$1);
var G__54458 = c__5525__auto__;
var G__54459 = cljs.core.count(c__5525__auto__);
var G__54460 = (0);
seq__54238 = G__54457;
chunk__54239 = G__54458;
count__54240 = G__54459;
i__54241 = G__54460;
continue;
} else {
var vec__54266 = cljs.core.first(seq__54238__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54266,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54266,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___54461 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___54461)){
var effect_fn_54462 = temp__5802__auto___54461;
(effect_fn_54462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_54462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_54462.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__54466 = cljs.core.next(seq__54238__$1);
var G__54467 = null;
var G__54468 = (0);
var G__54469 = (0);
seq__54238 = G__54466;
chunk__54239 = G__54467;
count__54240 = G__54468;
i__54241 = G__54469;
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
var seq__54294 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__54295 = null;
var count__54296 = (0);
var i__54297 = (0);
while(true){
if((i__54297 < count__54296)){
var event = chunk__54295.cljs$core$IIndexed$_nth$arity$2(null, i__54297);
re_frame.router.dispatch(event);


var G__54472 = seq__54294;
var G__54473 = chunk__54295;
var G__54474 = count__54296;
var G__54475 = (i__54297 + (1));
seq__54294 = G__54472;
chunk__54295 = G__54473;
count__54296 = G__54474;
i__54297 = G__54475;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54294);
if(temp__5804__auto__){
var seq__54294__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54294__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54294__$1);
var G__54476 = cljs.core.chunk_rest(seq__54294__$1);
var G__54477 = c__5525__auto__;
var G__54478 = cljs.core.count(c__5525__auto__);
var G__54479 = (0);
seq__54294 = G__54476;
chunk__54295 = G__54477;
count__54296 = G__54478;
i__54297 = G__54479;
continue;
} else {
var event = cljs.core.first(seq__54294__$1);
re_frame.router.dispatch(event);


var G__54482 = cljs.core.next(seq__54294__$1);
var G__54483 = null;
var G__54484 = (0);
var G__54485 = (0);
seq__54294 = G__54482;
chunk__54295 = G__54483;
count__54296 = G__54484;
i__54297 = G__54485;
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
var seq__54311 = cljs.core.seq(value);
var chunk__54312 = null;
var count__54313 = (0);
var i__54314 = (0);
while(true){
if((i__54314 < count__54313)){
var event = chunk__54312.cljs$core$IIndexed$_nth$arity$2(null, i__54314);
clear_event(event);


var G__54487 = seq__54311;
var G__54488 = chunk__54312;
var G__54489 = count__54313;
var G__54490 = (i__54314 + (1));
seq__54311 = G__54487;
chunk__54312 = G__54488;
count__54313 = G__54489;
i__54314 = G__54490;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54311);
if(temp__5804__auto__){
var seq__54311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54311__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__54311__$1);
var G__54491 = cljs.core.chunk_rest(seq__54311__$1);
var G__54492 = c__5525__auto__;
var G__54493 = cljs.core.count(c__5525__auto__);
var G__54494 = (0);
seq__54311 = G__54491;
chunk__54312 = G__54492;
count__54313 = G__54493;
i__54314 = G__54494;
continue;
} else {
var event = cljs.core.first(seq__54311__$1);
clear_event(event);


var G__54495 = cljs.core.next(seq__54311__$1);
var G__54496 = null;
var G__54497 = (0);
var G__54498 = (0);
seq__54311 = G__54495;
chunk__54312 = G__54496;
count__54313 = G__54497;
i__54314 = G__54498;
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
var _STAR_current_trace_STAR__orig_val__54355 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__54356 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__54356);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___54508 = re_frame.interop.now();
var duration__12885__auto___54509 = (end__12884__auto___54508 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___54509,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___54508);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__54355);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
