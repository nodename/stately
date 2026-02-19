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
var _STAR_current_trace_STAR__orig_val__44335 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44336 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44336);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___44595 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___44595)){
var new_db_44598 = temp__5804__auto___44595;
var fexpr__44346_44599 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44346_44599.cljs$core$IFn$_invoke$arity$1 ? fexpr__44346_44599.cljs$core$IFn$_invoke$arity$1(new_db_44598) : fexpr__44346_44599.call(null, new_db_44598));
} else {
}

var seq__44350 = cljs.core.seq(effects_without_db);
var chunk__44351 = null;
var count__44352 = (0);
var i__44353 = (0);
while(true){
if((i__44353 < count__44352)){
var vec__44383 = chunk__44351.cljs$core$IIndexed$_nth$arity$2(null, i__44353);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44383,(1),null);
var temp__5802__auto___44600 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44600)){
var effect_fn_44601 = temp__5802__auto___44600;
(effect_fn_44601.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44601.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44601.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__44603 = seq__44350;
var G__44604 = chunk__44351;
var G__44605 = count__44352;
var G__44606 = (i__44353 + (1));
seq__44350 = G__44603;
chunk__44351 = G__44604;
count__44352 = G__44605;
i__44353 = G__44606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44350);
if(temp__5804__auto__){
var seq__44350__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44350__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44350__$1);
var G__44608 = cljs.core.chunk_rest(seq__44350__$1);
var G__44609 = c__5525__auto__;
var G__44610 = cljs.core.count(c__5525__auto__);
var G__44611 = (0);
seq__44350 = G__44608;
chunk__44351 = G__44609;
count__44352 = G__44610;
i__44353 = G__44611;
continue;
} else {
var vec__44398 = cljs.core.first(seq__44350__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44398,(1),null);
var temp__5802__auto___44613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44613)){
var effect_fn_44614 = temp__5802__auto___44613;
(effect_fn_44614.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44614.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44614.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__44615 = cljs.core.next(seq__44350__$1);
var G__44616 = null;
var G__44617 = (0);
var G__44618 = (0);
seq__44350 = G__44615;
chunk__44351 = G__44616;
count__44352 = G__44617;
i__44353 = G__44618;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___44620 = re_frame.interop.now();
var duration__12885__auto___44621 = (end__12884__auto___44620 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___44621,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___44620);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44335);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___44624 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___44624)){
var new_db_44625 = temp__5804__auto___44624;
var fexpr__44408_44626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__44408_44626.cljs$core$IFn$_invoke$arity$1 ? fexpr__44408_44626.cljs$core$IFn$_invoke$arity$1(new_db_44625) : fexpr__44408_44626.call(null, new_db_44625));
} else {
}

var seq__44409 = cljs.core.seq(effects_without_db);
var chunk__44410 = null;
var count__44411 = (0);
var i__44412 = (0);
while(true){
if((i__44412 < count__44411)){
var vec__44432 = chunk__44410.cljs$core$IIndexed$_nth$arity$2(null, i__44412);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44432,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44432,(1),null);
var temp__5802__auto___44629 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44629)){
var effect_fn_44630 = temp__5802__auto___44629;
(effect_fn_44630.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44630.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44630.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__44631 = seq__44409;
var G__44632 = chunk__44410;
var G__44633 = count__44411;
var G__44634 = (i__44412 + (1));
seq__44409 = G__44631;
chunk__44410 = G__44632;
count__44411 = G__44633;
i__44412 = G__44634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44409);
if(temp__5804__auto__){
var seq__44409__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44409__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44409__$1);
var G__44635 = cljs.core.chunk_rest(seq__44409__$1);
var G__44636 = c__5525__auto__;
var G__44637 = cljs.core.count(c__5525__auto__);
var G__44638 = (0);
seq__44409 = G__44635;
chunk__44410 = G__44636;
count__44411 = G__44637;
i__44412 = G__44638;
continue;
} else {
var vec__44439 = cljs.core.first(seq__44409__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(1),null);
var temp__5802__auto___44640 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44640)){
var effect_fn_44641 = temp__5802__auto___44640;
(effect_fn_44641.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44641.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44641.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__44642 = cljs.core.next(seq__44409__$1);
var G__44643 = null;
var G__44644 = (0);
var G__44645 = (0);
seq__44409 = G__44642;
chunk__44410 = G__44643;
count__44411 = G__44644;
i__44412 = G__44645;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__44445){
var map__44446 = p__44445;
var map__44446__$1 = cljs.core.__destructure_map(map__44446);
var effect = map__44446__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44446__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44446__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__44448 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44449 = null;
var count__44450 = (0);
var i__44451 = (0);
while(true){
if((i__44451 < count__44450)){
var effect = chunk__44449.cljs$core$IIndexed$_nth$arity$2(null, i__44451);
re_frame.fx.dispatch_later(effect);


var G__44651 = seq__44448;
var G__44652 = chunk__44449;
var G__44653 = count__44450;
var G__44654 = (i__44451 + (1));
seq__44448 = G__44651;
chunk__44449 = G__44652;
count__44450 = G__44653;
i__44451 = G__44654;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44448);
if(temp__5804__auto__){
var seq__44448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44448__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44448__$1);
var G__44655 = cljs.core.chunk_rest(seq__44448__$1);
var G__44656 = c__5525__auto__;
var G__44657 = cljs.core.count(c__5525__auto__);
var G__44658 = (0);
seq__44448 = G__44655;
chunk__44449 = G__44656;
count__44450 = G__44657;
i__44451 = G__44658;
continue;
} else {
var effect = cljs.core.first(seq__44448__$1);
re_frame.fx.dispatch_later(effect);


var G__44659 = cljs.core.next(seq__44448__$1);
var G__44660 = null;
var G__44661 = (0);
var G__44662 = (0);
seq__44448 = G__44659;
chunk__44449 = G__44660;
count__44450 = G__44661;
i__44451 = G__44662;
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
var seq__44479 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__44480 = null;
var count__44481 = (0);
var i__44482 = (0);
while(true){
if((i__44482 < count__44481)){
var vec__44504 = chunk__44480.cljs$core$IIndexed$_nth$arity$2(null, i__44482);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44504,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___44664 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44664)){
var effect_fn_44665 = temp__5802__auto___44664;
(effect_fn_44665.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44665.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44665.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44666 = seq__44479;
var G__44667 = chunk__44480;
var G__44668 = count__44481;
var G__44669 = (i__44482 + (1));
seq__44479 = G__44666;
chunk__44480 = G__44667;
count__44481 = G__44668;
i__44482 = G__44669;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44479);
if(temp__5804__auto__){
var seq__44479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44479__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44479__$1);
var G__44670 = cljs.core.chunk_rest(seq__44479__$1);
var G__44671 = c__5525__auto__;
var G__44672 = cljs.core.count(c__5525__auto__);
var G__44673 = (0);
seq__44479 = G__44670;
chunk__44480 = G__44671;
count__44481 = G__44672;
i__44482 = G__44673;
continue;
} else {
var vec__44510 = cljs.core.first(seq__44479__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44510,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44510,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___44675 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___44675)){
var effect_fn_44676 = temp__5802__auto___44675;
(effect_fn_44676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44676.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__44678 = cljs.core.next(seq__44479__$1);
var G__44679 = null;
var G__44680 = (0);
var G__44681 = (0);
seq__44479 = G__44678;
chunk__44480 = G__44679;
count__44481 = G__44680;
i__44482 = G__44681;
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
var seq__44522 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44523 = null;
var count__44524 = (0);
var i__44525 = (0);
while(true){
if((i__44525 < count__44524)){
var event = chunk__44523.cljs$core$IIndexed$_nth$arity$2(null, i__44525);
re_frame.router.dispatch(event);


var G__44682 = seq__44522;
var G__44683 = chunk__44523;
var G__44684 = count__44524;
var G__44685 = (i__44525 + (1));
seq__44522 = G__44682;
chunk__44523 = G__44683;
count__44524 = G__44684;
i__44525 = G__44685;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44522);
if(temp__5804__auto__){
var seq__44522__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44522__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44522__$1);
var G__44686 = cljs.core.chunk_rest(seq__44522__$1);
var G__44687 = c__5525__auto__;
var G__44688 = cljs.core.count(c__5525__auto__);
var G__44689 = (0);
seq__44522 = G__44686;
chunk__44523 = G__44687;
count__44524 = G__44688;
i__44525 = G__44689;
continue;
} else {
var event = cljs.core.first(seq__44522__$1);
re_frame.router.dispatch(event);


var G__44690 = cljs.core.next(seq__44522__$1);
var G__44691 = null;
var G__44692 = (0);
var G__44693 = (0);
seq__44522 = G__44690;
chunk__44523 = G__44691;
count__44524 = G__44692;
i__44525 = G__44693;
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
var seq__44541 = cljs.core.seq(value);
var chunk__44542 = null;
var count__44543 = (0);
var i__44544 = (0);
while(true){
if((i__44544 < count__44543)){
var event = chunk__44542.cljs$core$IIndexed$_nth$arity$2(null, i__44544);
clear_event(event);


var G__44694 = seq__44541;
var G__44695 = chunk__44542;
var G__44696 = count__44543;
var G__44697 = (i__44544 + (1));
seq__44541 = G__44694;
chunk__44542 = G__44695;
count__44543 = G__44696;
i__44544 = G__44697;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44541);
if(temp__5804__auto__){
var seq__44541__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44541__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44541__$1);
var G__44698 = cljs.core.chunk_rest(seq__44541__$1);
var G__44699 = c__5525__auto__;
var G__44700 = cljs.core.count(c__5525__auto__);
var G__44701 = (0);
seq__44541 = G__44698;
chunk__44542 = G__44699;
count__44543 = G__44700;
i__44544 = G__44701;
continue;
} else {
var event = cljs.core.first(seq__44541__$1);
clear_event(event);


var G__44702 = cljs.core.next(seq__44541__$1);
var G__44703 = null;
var G__44704 = (0);
var G__44705 = (0);
seq__44541 = G__44702;
chunk__44542 = G__44703;
count__44543 = G__44704;
i__44544 = G__44705;
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
var _STAR_current_trace_STAR__orig_val__44581 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44582 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44582);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12884__auto___44706 = re_frame.interop.now();
var duration__12885__auto___44707 = (end__12884__auto___44706 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12885__auto___44707,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12884__auto___44706);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44581);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
